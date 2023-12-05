import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  // auth service is injected into the constructor
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: AuthDTO) {
    return this.authService.register(body as AuthDTO);
  }

  @Post('login')
  login(@Body() body: AuthDTO) {
    return this.authService.login(body as AuthDTO);
  }

  @Post('logout')
  logout() {}
}
