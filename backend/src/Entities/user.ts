import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { CommuncationTypesE, UserTypesE } from '../types';
import { Auth } from './Auth.entity';

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

  @Column('varchar')
  password: string;

  @OneToOne(() => Auth, (auth) => auth.id)
  @JoinColumn()
  auth: Auth;

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

  @Column('varchar', { nullable: true })
  avatar: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
