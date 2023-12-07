import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { MyJwtGuard, MyJwtGuardAdmin } from 'src/auth/guard';

import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  @Get('profile')
  @UseGuards(MyJwtGuard)
  @ApiBearerAuth()
  getUser(@Req() req: Request) {
    console.log(req.user);
    return req.user;
  }

  @Get('getAll')
  @UseGuards(MyJwtGuardAdmin)
  @ApiBearerAuth()
  getAllUsers(@GetUser() user: User) {
    return `Hello ${user}!`;
  }
}
