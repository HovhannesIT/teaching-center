import { Injectable } from '@nestjs/common';
import { ApplyDTO } from './dto/apply.dto';
import { Contract, Invitations } from '../../entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(Contract)
    private contract: Repository<Contract>,
    @InjectRepository(Invitations)
    private invitations: Repository<Invitations>,
  ) {}

  async list(userId) {
    return await this.contract
      .createQueryBuilder()
      .where('teacherId = :userId OR studentId = :userId', {
        userId,
      })
      .getMany();
  }

  async applyInvitation(teacherId, apply: ApplyDTO) {
    const invitation = await this.invitations.findOne({
      where: [{ id: apply.invitationId }],
      relations: ['owner', 'applyer'],
    });

    if (invitation.owner.id !== teacherId) {
      return false;
    }

    const newContract = this.contract.create({
      ...apply,
      teacher: invitation.owner,
      student: invitation.applyer,
    });

    const savedContract = await this.contract.save(newContract);

    await this.invitations.update(invitation.id, { contract: savedContract });

    return savedContract;
  }
}
