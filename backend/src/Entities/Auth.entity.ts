import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @Column('unsigned big int', { unique: true })
  userId: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
