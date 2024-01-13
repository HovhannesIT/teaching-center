import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './User.entity';
import { Profession } from './Profession.entity';
import { ContractType } from './ContractType.entity';
/*
    Id - [bigUnsignedInteger/ autoIncrement]
    title - [string]
    professionId - [bigUnsignedInteger]	
    teacherId - [bigUnsignedInteger]
    studentId - [bigUnsignedInteger]
    language - [string]
    description - [string]
    priceType - enum[one.time.fixed/each.lesson]
    price - [bigInteger]
    currency - enum[$/€/֏]
    updatedAt - [Date]
    createdAt - [Date]
*/

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Profession, (profession) => profession.id)
  profession: Profession;

  @OneToMany(() => User, (user) => user.id)
  teacher: User;

  @OneToMany(() => User, (user) => user.id)
  User: User;

  @Column('string')
  language: string;

  @Column('string')
  description: string;

  @Column('enum')
  priceType: 'one.time.fixed' | 'each.lesson';

  @Column('enum')
  currency: '$' | '€' | '֏';

  @Column('bigint')
  price: number;

  @OneToMany(() => ContractType, (contractType) => contractType.id)
  contractType: ContractType;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
