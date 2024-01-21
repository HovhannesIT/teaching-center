import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities';
import { Repository } from 'typeorm';
import { UpdateUserInfoDTO } from './dto/UpdateUserInfo.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getInfo(userId: number) {
    const user = await this.userRepository.findOne({ where: [{ id: userId }] });

    delete user.password;

    return user;
  }

  async updateInfo(userId: number, userInfo: UpdateUserInfoDTO) {
    const user = await this.userRepository.findOne({ where: [{ id: userId }] });

    Object.assign(user, userInfo);

    await this.userRepository.save(user);

    delete user.password;

    return user;
  }
}
