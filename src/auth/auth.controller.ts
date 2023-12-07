import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';
import { Response } from 'express';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  // auth service is injected into the constructor
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiCreatedResponse({ description: 'User has been registered' })
  @ApiBody({ type: AuthDTO })
  register(@Body() body: AuthDTO) {
    return this.authService.register(body as AuthDTO);
  }

  @Post('login')
  @ApiCreatedResponse({ description: 'User has been registered' })
  @ApiBody({ type: AuthDTO })
  login(@Body() body: AuthDTO, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(body as AuthDTO, res);
  }

  @Post('logout')
  logout() {}
}
