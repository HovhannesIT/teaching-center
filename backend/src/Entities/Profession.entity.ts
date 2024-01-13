import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

/*
  Id - [bigUnsignedInteger/ autoIncrement]
  name - [string]
  updatedAt - [Date]
  createdAt - [Date]
  */

@Entity()
export class Profession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
