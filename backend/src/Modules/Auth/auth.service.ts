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

  async createNewUser(user: User) {
    const newUserInfo = this.userRepository.create(user);
    try {
      const user = await this.userRepository.save(newUserInfo);

      const newAuthInfo = this.authRepository.create(user);
      await this.authRepository.save(newAuthInfo);

      return true;
    } catch (err) {
      return false;
    }
  }
  // findUserTokens(email: string, password: string) {}
  // deleteActualTokens(email: string) {}
}
