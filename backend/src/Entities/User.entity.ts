import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

/*
Id - [bigUnsignedInteger/ autoIncrement]
firstName - [string]
lastName - [string]!
username - [string]
email - [string]
password - [string] 
type - enum[teacher/student/both]
professionId - [bigUnsignedInteger]
phoneNumber - [string]
birthDate - [date]
avatar - [string]!
updatedAt - [Date]
createdAt - [Date]
*/

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  firstName: string;

  @Column('string')
  lastName: string;

  @Column('string', { unique: true })
  username: string;

  @Column('string', { unique: true })
  email: string;

  @Column('enum')
  type: 'teacher' | 'student' | 'both';

  @Column('unsigned big int')
  professionId: number;

  @Column('string')
  phoneNumber: string;

  @Column('date')
  birthDate: Date;

  @Column('string')
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
