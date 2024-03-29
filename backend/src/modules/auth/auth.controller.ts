import {
  Controller,
  Post,
  Delete,
  Put,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { SignUpDto } from './dto/sign-up';
import { AuthService } from './auth.service';
import { User } from '../../entities';
import { plainToInstance } from 'class-transformer';
import { SignInDto } from './dto/sign-in';
import { hash } from 'bcrypt';
import { AccessGuard } from '../../guards/access.guard';
import { RequestGuardedI } from '../../types';

@Controller('auth')
export class AuthController {
  private bcryptSalt = 10;

  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(@Body() signInBody: SignInDto) {
    signInBody.password = await hash(signInBody.password, this.bcryptSalt);

    const user = await this.authService.createTokens(signInBody);

    if (!user) {
      throw new HttpException(
        {
          message: ['Incorrect credentials'],
          error: 'Bad Request',
          statusCode: 400,
        },
        HttpStatus.BAD_REQUEST,
      );
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
        throw new HttpException(
          {
            message: ['User allready exists'],
            error: 'Bad Request',
            statusCode: 400,
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      return sqlRes;
    } catch (err) {
      throw new HttpException(
        {
          message: ['User allready exists'],
          error: 'Bad Request',
          statusCode: 400,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('sign-out')
  @UseGuards(AccessGuard)
  async signOut(@Req() req: RequestGuardedI) {
    await this.authService.removeTokens(req.user);

    return true;
  }

  @Put('refresh-tokens')
  @UseGuards(AccessGuard)
  refreshTokens() {
    return 'test';
  }
}
