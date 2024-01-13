import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from './User.entity';
import { Profession } from './Profession.entity';
/*
Id - [bigUnsignedInteger/ autoIncrement]
professionId - [bigUnsignedInteger]
name - [string]
description - [string] 
userId - [bigUnsignedInteger]
communicationType - enum [zoom/skype/google.meet]
updatedAt - [Date]
createdAt - [Date]
*/

@Entity()
export class SeekingLooking {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Profession, (profession) => profession.id)
  @JoinColumn()
  profession: number;

  @Column('string')
  name: number;

  @Column('string')
  description: number;

  @OneToMany(() => User, (user) => user.id)
  @JoinColumn()
  User: User;

  @Column('string')
  communicationType: 'zoom' | 'skype' | 'google.meet';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
