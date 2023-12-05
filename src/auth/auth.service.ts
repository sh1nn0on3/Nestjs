import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDTO } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async register(authDTO: AuthDTO) {
    const hasdedPassword = await argon.hash(authDTO.password);
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: authDTO.email,
          password: hasdedPassword,
        },
        select: {
          id: true,
          email: true,
          name: true,
        },
      });
      return { message: `success`, user };
    } catch {
      return { message: `failed` };
    }
  }

  async login(authDTO: AuthDTO) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: authDTO.email,
      },
    });
    if (!user) throw new ForbiddenException(`Email not found`);
    const isPasswordValid = await argon.verify(user.password, authDTO.password);
    if (!isPasswordValid) throw new ForbiddenException(`Password is invalid`);
    delete user.password;
    return { message: `success`, user };
  }

  logout() {}
}
