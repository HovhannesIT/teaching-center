import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from './user';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: true })
  refreshToken: string;

  @Column('varchar', { nullable: true })
  accessToken: string;

  @OneToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn()
  user?: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
