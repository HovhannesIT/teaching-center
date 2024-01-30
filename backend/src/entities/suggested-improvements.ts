import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SuggestedImprovement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @Column('varchar')
  ip: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
