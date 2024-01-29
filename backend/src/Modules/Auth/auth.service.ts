import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User, Auth } from '../../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/sign-in';
import { JwtService } from '../core/services/jwt.service';
import { ExpiresIn, JWTPayloadI } from '../core/services/types/jwt.types';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    @Inject(JwtService)
    private readonly jwtService: JwtService,
  ) {}

  async createNewUser(user: User) {
    const newUserInfo = this.userRepository.create(user);

    try {
      const auth = await this.authRepository.save(this.authRepository.create());

      await this.userRepository.save({
        ...newUserInfo,
        auth,
      });

      return auth;
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createTokens(user: SignInDto) {
    const userData = await this.userRepository.findOne({
      relations: ['auth'],
      where: [{ email: user.email }, { username: user.email }],
    });

    if (userData) {
      const accessToken = this.jwtService.generateToken(
        {
          id: userData.id,
          type: userData.type,
          professionId: userData.professionId,
          authId: userData.auth.id,
        },
        ExpiresIn.ACCESS_TOKEN,
      );
      const refreshToken = this.jwtService.generateToken(
        {
          id: userData.id,
          type: userData.type,
          professionId: userData.professionId,
          authId: userData.auth.id,
        },
        ExpiresIn.REFRESH_TOKEN,
      );

      await this.authRepository.update(userData.auth.id, {
        refreshToken,
        accessToken,
      });
      userData.auth.refreshToken = refreshToken;

      return {
        ...userData,
        accessToken,
      };
    } else {
      return false;
    }
  }

  async isTokenExistInDB(token: string) {
    try {
      await this.authRepository.findOne({ where: { accessToken: token } });
      return true;
    } catch (err) {
      return false;
    }
  }

  checkTokenValidity(token: string) {
    try {
      this.jwtService.verifyToken(token);
      return this.jwtService.readPayload(token);
    } catch (err) {
      return false;
    }
  }

  async removeTokens(user: JWTPayloadI) {
    const uAuth = await this.authRepository.findOne({
      where: [{ id: user.authId }],
    });

    uAuth.refreshToken = null;

    this.authRepository.save(uAuth);
  }
}
