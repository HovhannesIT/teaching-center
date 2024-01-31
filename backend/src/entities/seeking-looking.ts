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
import { Professions } from './professions';

@Entity()
export class SeekingLooking {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Professions, (profession) => profession.id)
  @JoinColumn()
  profession: number;

  @Column('varchar')
  name: number;

  @Column('text')
  description: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  owner: User;

  @Column('varchar')
  communicationType: 'zoom' | 'skype' | 'google.meet';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
