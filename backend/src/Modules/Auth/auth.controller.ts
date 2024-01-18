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
import { SignInDto } from './dto/SignIn.dto';
import { hash } from 'bcrypt';
@Controller('auth')
export class AuthController {
  private bcryptSalt = 10;

  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(@Body() signInBody: SignInDto) {
    signInBody.password = await hash(signInBody.password, this.bcryptSalt);

    const user = await this.authService.createTokens(signInBody);

    if (!user) {
      throw new HttpException('Incorrect credentials', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  @Post('sign-up')
  async signUp(@Body() signUpBody: SignUpDto) {
    signUpBody.password = await hash(signUpBody.password, this.bcryptSalt);

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
