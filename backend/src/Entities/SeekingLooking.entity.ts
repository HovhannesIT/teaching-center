import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { User } from './User.entity';
import { Profession } from './Profession.entity';

@Entity()
export class SeekingLooking {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profession, (profession) => profession.id)
  @JoinColumn()
  profession: number;

  @Column('varchar')
  name: number;

  @Column('text')
  description: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  owner: User;

  @Column('varchar')
  communicationType: 'zoom' | 'skype' | 'google.meet';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
