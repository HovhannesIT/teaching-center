import { Controller, Post, Delete, Put, Body } from '@nestjs/common';
import { SignUpDto } from './dto/SignUp.dto';
// import { SignInDto } from './dto/SignIn.dto';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  signIn() {}

  @Post('sign-up')
  async signUp(@Body() signUpBody: SignUpDto) {
    try {
      await this.authService.createNewUser(signUpBody);

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  @Delete('sign-out')
  signOut() {}

  @Put('refresh-tokens')
  refreshTokens() {
    return 'test';
  }
}
