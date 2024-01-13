import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from './User.entity';
import { Contract } from './Contract.entity';

/*
    Id - [bigUnsignedInteger/ autoIncrement]
    contractId - [bigUnsignedInteger]
    applyerId - [bigUnsignedInteger]
    subscriberId [bigUnsignedInteger]
    updatedAt - [Date]
    createdAt - [Date]
  */

@Entity()
export class Invitations {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Contract, (contract) => contract.id)
  @JoinColumn()
  contract: Contract;

  @OneToMany(() => User, (user) => user.id)
  @JoinColumn()
  applyer: User;

  @OneToMany(() => User, (user) => user.id)
  @JoinColumn()
  subscriber: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
