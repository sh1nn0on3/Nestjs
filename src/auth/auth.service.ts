import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  doSomeThing() {
    console.log('Auth service does something');
  }

  register() {}

  login() {}

  logout() {}
}
