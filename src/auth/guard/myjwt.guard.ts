import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


export class MyJwtGuard extends AuthGuard('jwt') {}

export class MyJwtGuardAdmin extends AuthGuard('jwt') {
  handleRequest(err, user, info, context) {
    if (user.role !== 'ADMIN') {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
