import {
  Controller,
  Post,
  Delete,
  Put,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SignUpDto } from './dto/SignUp.dto';
// import { SignInDto } from './dto/SignIn.dto';
import { AuthService } from './auth.service';
import { User } from '../../entities';
import { plainToInstance } from 'class-transformer';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  signIn() {}

  @Post('sign-up')
  async signUp(@Body() signUpBody: SignUpDto) {
    try {
      const sqlRes = await this.authService.createNewUser(
        plainToInstance(User, signUpBody),
      );

      if (!sqlRes) {
        throw new HttpException('User allready exists', HttpStatus.BAD_REQUEST);
      }

      return sqlRes;
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('sign-out')
  signOut() {}

  @Put('refresh-tokens')
  refreshTokens() {
    return 'test';
  }
}
