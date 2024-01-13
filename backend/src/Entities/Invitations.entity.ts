import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
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
  contract: Contract;

  @OneToMany(() => User, (user) => user.id)
  applyer: User;

  @OneToMany(() => User, (user) => user.id)
  subscriber: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
