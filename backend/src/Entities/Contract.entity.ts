import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from './User.entity';
import { Profession } from './Profession.entity';
import { PriceTypesE } from '../types/enums/PriceTypes';
import { CurrenciesE } from '../types/enums/Currencies';
import { ContractTypeE } from '../types/enums/ContractType';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profession, (profession) => profession.id)
  @JoinColumn()
  profession: Profession;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  teacher: User;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  student: User;

  @Column('text')
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
    enum: ContractTypeE,
    default: ContractTypeE.ONE_TIME,
    nullable: false,
  })
  contractType: ContractTypeE;

  @Column({
    type: 'enum',
    enum: CurrenciesE,
    default: CurrenciesE.DOLLAR,
    nullable: false,
  })
  currency: CurrenciesE;

  @Column('bigint')
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
