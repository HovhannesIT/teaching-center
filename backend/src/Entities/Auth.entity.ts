import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './User.entity';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: true })
  accessToken: string;

  @Column('varchar', { nullable: true })
  refreshToken: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
