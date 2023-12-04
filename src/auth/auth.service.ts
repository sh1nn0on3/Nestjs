import { Injectable } from '@nestjs/common';
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

  login() {}

  logout() {}
}
