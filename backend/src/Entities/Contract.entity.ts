import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from './User.entity';
import { Profession } from './Profession.entity';
import { ContractType } from './ContractType.entity';
import { PriceTypesE } from '../types/enums/PriceTypes';
import { CurrenciesE } from '../types/enums/Currencies';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Profession, (profession) => profession.id)
  @JoinColumn()
  profession: Profession;

  @OneToMany(() => User, (user) => user.id)
  @JoinColumn()
  teacher: User;

  @OneToMany(() => User, (user) => user.id)
  @JoinColumn()
  User: User;

  @Column('varchar')
  language: string;

  @Column('varchar')
  description: string;

  @Column({
    type: 'enum',
    enum: PriceTypesE,
    default: PriceTypesE.ONE_TIME_FIXED,
    nullable: false,
  })
  priceType: PriceTypesE;

  @Column({
    type: 'enum',
    enum: CurrenciesE,
    default: CurrenciesE.DOLLAR,
    nullable: false,
  })
  currency: CurrenciesE;

  @Column('bigint')
  price: number;

  @OneToMany(() => ContractType, (contractType) => contractType.id)
  @JoinColumn()
  contractType: ContractType;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
