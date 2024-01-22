import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from './User.entity';
import { Contract } from './Contract.entity';
import { SeekingLooking } from './SeekingLooking.entity';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
