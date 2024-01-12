import { Controller, Post, Delete, Put } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('sign-in')
  signIn() {}

  @Post('sign-up')
  signUp() {}

  @Delete('sign-out')
  signOut() {}

  @Put('refresh-tokens')
  refreshTokens() {}
}
