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
import { SignUpDto } from './dto/SignUp.dto';
import { AuthService } from './auth.service';
import { User } from '../../entities';
import { plainToInstance } from 'class-transformer';
import { SignInDto } from './dto/SignIn.dto';
import { hash } from 'bcrypt';
import { AuthGuard, RefreshGuard } from '../../guards/auth.guard';
import { RequestGuardI } from '../../types/interfaces/request.guard';

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
  @UseGuards(RefreshGuard)
  async signOut(@Req() req: RequestGuardI) {
    await this.authService.removeTokens(req.user);

    return true;
  }

  @Put('refresh-tokens')
  @UseGuards(AuthGuard)
  refreshTokens() {
    return 'test';
  }
}
