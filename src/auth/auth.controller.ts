import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // auth service is injected into the constructor
  constructor(private authService: AuthService) {
    authService.doSomeThing();
  }

  @Post('register')
  register() {
    return this.authService.register();
  }

  @Post('login')
  login() {}

  @Post('logout')
  logout() {}
}
