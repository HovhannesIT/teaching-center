import { Injectable } from '@nestjs/common';
import { OpenDTO } from './dto/apply.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invitations, SeekingLooking, User } from '../../entities';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class SeekingLookingService {
  constructor(
    @InjectRepository(SeekingLooking)
    private seekingLooking: Repository<SeekingLooking>,
    @InjectRepository(Invitations)
    private invitations: Repository<Invitations>,
    @InjectRepository(User)
    private user: Repository<User>,
  ) {}

  async create(userId: number, seekingLookingBody: OpenDTO) {
    const user = await this.user.findOne({ where: [{ id: userId }] });
    const newSeekingLooking = this.seekingLooking.create(
      plainToInstance(SeekingLooking, seekingLookingBody),
    );

    newSeekingLooking.owner = user;

    return await this.seekingLooking.save(newSeekingLooking);
  }

  async list(userId?: number) {
    if (userId) {
      return await this.seekingLooking.find({
        where: [
          {
            owner: {
              id: userId,
            },
          },
        ],
        relations: ['User'],
      });
    }

    return await this.seekingLooking.find({ relations: ['User'] });
  }

  async apply(seekingLookingId: number, applyerId: number) {
    const seekingLooking = await this.seekingLooking.findOne({
      where: [{ id: seekingLookingId }],
      relations: ['owner'],
    });
    const applyer = await this.user.findOne({ where: [{ id: applyerId }] });

    const newInvitation = this.invitations.create({
      seekingLooking,
      owner: seekingLooking.owner,
      applyer: applyer,
    });

    return await this.invitations.save(newInvitation);
  }
}
