import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dts';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post("/sign-in")
  signIn(@Body() data: SignInDto) {
    return {
      msg: "save-this-token-in-localstorage"
    }
  }

  @Post("/sign-up")
  async signUp(@Body() data: SignUpDto) {
    return {
      data: await this.authService.registerUser(data)
    }
  }

}
