import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Auth,
  Contract,
  Invitations,
  Professions,
  SeekingLooking,
  User,
  CommunicationTypes,
} from '../../../entities';

import * as dotenv from 'dotenv';
import { SuggestedImprovement } from '../../../entities/suggested-improvements';
import { SuggestedProfession } from '../../../entities/suggested-professions';

dotenv.config();

const entities = [
  Auth,
  User,
  Contract,
  Invitations,
  Professions,
  SeekingLooking,
  CommunicationTypes,
  SuggestedImprovement,
  SuggestedProfession,
];

export const ForRootModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities,
  logging: true,
  synchronize: true,
});

const ForFeatureModuel = TypeOrmModule.forFeature(entities);

@Module({
  imports: [ForRootModule, ForFeatureModuel],
  exports: [ForFeatureModuel],
})
export class DatabaseModule {}
