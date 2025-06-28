import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dts';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  async signIn(@Body() data: SignInDto) {
    return {
      data: await this.authService.signIn(data),
    };
  }

  @Post('/sign-up')
  async signUp(@Body() data: SignUpDto) {
    return {
      data: await this.authService.registerUser(data),
    };
  }
}
