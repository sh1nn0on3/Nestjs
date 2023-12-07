import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDTO } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(authDTO: AuthDTO) {
    const hasdedPassword = await argon.hash(authDTO.password);
    try {
      const user = await this.prismaService.user.create({
        data: { email: authDTO.email, password: hasdedPassword },
        select: { id: true, email: true, name: true },
      });
      return { message: `success`, user };
    } catch {
      return { message: `failed` };
    }
  }

  async login(authDTO: AuthDTO, res: Response) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: authDTO.email,
      },
    });
    if (!user) throw new ForbiddenException(`Email not found`);
    const isPasswordValid = await argon.verify(user.password, authDTO.password);
    if (!isPasswordValid) throw new ForbiddenException(`Password is invalid`);
    delete user.password;
    const accessToken = await this.convertToAccessJwt(user);
    const refreshToken = await this.convertToRefreshJwt(user);
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
    });
    return { message: `success`, accessToken: `Beares ${accessToken}` };
  }

  logout() {}

  async convertToAccessJwt(user: any) {
    const payload = { sub: user.id, ...user };
    const token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET_ACCESS'),
      expiresIn: `${this.configService.get('JWT_ACCESS_TIME')}`,
    });
    return token;
  }
  async convertToRefreshJwt(user: any) {
    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET_REFRESH'),
      expiresIn: `${this.configService.get('JWT_REFRESH_TIME')}`,
    });
    return token;
  }
}
