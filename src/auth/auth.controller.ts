import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
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

  @Get('all')
  getAll() {
    return this.authService.getAll();
  }

  @Get('all/:email')
  getUser(@Param('email') email: string) {
    return this.authService.getUser(email);
  }

  @Post('logout')
  logout() {}
}
