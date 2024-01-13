import { Controller, Post, Delete, Put, Body } from '@nestjs/common';
import { SignUpDto } from './dto/SignUp.dto';
import { SignInDto } from './dto/SignIn.dto';
@Controller('auth')
export class AuthController {
  @Post('sign-in')
  signIn(@Body() signInBody: SignInDto) {}

  @Post('sign-up')
  signUp(@Body() signUpBody: SignUpDto) {}

  @Delete('sign-out')
  signOut() {}

  @Put('refresh-tokens')
  refreshTokens() {
    return 'test';
  }
}
