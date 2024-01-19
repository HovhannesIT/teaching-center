import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User, Auth } from '../../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/SignIn.dto';
import { JwtService } from '../Core/services/jwt.service';
import { ExpiresInE, JWTPayloadI } from '../Core/services/types/jwt.types';

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

      return true;
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
        ExpiresInE.ACCESS_TOKEN,
      );
      const refreshToken = this.jwtService.generateToken(
        {
          id: userData.id,
          type: userData.type,
          professionId: userData.professionId,
          authId: userData.auth.id,
        },
        ExpiresInE.REFRESH_TOKEN,
      );

      await this.authRepository.update(userData.auth.id, {
        accessToken,
        refreshToken,
      });

      userData.auth.accessToken = accessToken;
      userData.auth.refreshToken = refreshToken;

      return userData;
    } else {
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

    uAuth.accessToken = null;
    uAuth.refreshToken = null;

    this.authRepository.save(uAuth);
  }
}
