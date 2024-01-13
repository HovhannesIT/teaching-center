import { Injectable } from '@nestjs/common';
import { User, Auth } from '../../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  async createNewUser(user) {
    const newAuthInfo = this.authRepository.create({ user });
    const newUsernfo = this.userRepository.create(user);
    try {
      await this.authRepository.save(newAuthInfo);
      await this.userRepository.save(newUsernfo);

      return true;
    } catch (err) {
      return false;
    }
  }
  // findUserTokens(email: string, password: string) {}
  // deleteActualTokens(email: string) {}
}
