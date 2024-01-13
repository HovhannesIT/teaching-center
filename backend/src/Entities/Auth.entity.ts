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

/*
Id - [bigUnsignedInteger/ autoIncrement]
accessToken [string]
refreshToken [string]
userId [bigUnsignedInteger]
updatedAt [Date]
createdAt [Date]
*/

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  accessToken: string;

  @Column('string')
  refreshToken: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
