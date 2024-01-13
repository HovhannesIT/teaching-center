import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CommuncationTypesE, UserTypesE } from '../types';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName?: string;

  @Column('varchar', { unique: true })
  username: string;

  @Column('varchar', { unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: UserTypesE,
    default: UserTypesE.BOTH,
    nullable: false,
  })
  type: UserTypesE;

  @Column({
    name: 'professionId',
    type: 'bigint',
    unsigned: true,
    nullable: false,
  })
  professionId: number;

  @Column({
    name: 'phoneNumber',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  phoneNumber: string;

  @Column({
    type: 'enum',
    enum: CommuncationTypesE,
    default: CommuncationTypesE.SKYPE,
    nullable: false,
  })
  primaryCommunicationType: CommuncationTypesE;

  @Column('date')
  birthDate: Date;

  @Column('varchar')
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
