import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
  Column,
} from 'typeorm';
import { User } from './User.entity';
import { Contract } from './Contract.entity';
import { SeekingLooking } from './SeekingLooking.entity';
import { IsBoolean } from 'class-validator';

@Entity()
export class Invitations {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Contract, (contract) => contract.id, { nullable: true })
  @JoinColumn()
  contract: Contract;

  @OneToOne(() => SeekingLooking, (seekingLooking) => seekingLooking.id)
  @JoinColumn()
  seekingLooking: SeekingLooking;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  owner: User;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  applyer: User;

  @Column('varchar')
  language: string;

  @IsBoolean()
  applyed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
