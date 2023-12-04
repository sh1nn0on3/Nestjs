import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    // auth 
    constructor(private authService : AuthService) {

    }
}
