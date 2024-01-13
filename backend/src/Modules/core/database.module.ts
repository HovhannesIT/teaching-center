import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Auth,
  Contract,
  ContractType,
  Invitations,
  Profession,
  SeekingLooking,
  User,
} from '../../entities';

import * as dotenv from 'dotenv';

dotenv.config();

export const ForRootModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    Auth,
    User,
    Contract,
    ContractType,
    Invitations,
    Profession,
    SeekingLooking,
  ],
  logging: true,
  synchronize: true,
});

const ForFeatureModuel = TypeOrmModule.forFeature([
  Auth,
  User,
  Contract,
  ContractType,
  Invitations,
  Profession,
  SeekingLooking,
]);

@Module({
  imports: [ForRootModule, ForFeatureModuel],
  exports: [ForFeatureModuel],
})
export class DatabaseModule {}