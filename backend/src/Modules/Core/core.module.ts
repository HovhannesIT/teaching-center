import { Module } from '@nestjs/common';

import { JwtService } from './services/jwt.service';
import { PasswordService } from './services/password.service';
import { JwtModule as JWT } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { DatabaseModule } from './modules/database.module';

dotenv.config();

const JWTCoreModule = JWT.register({
  secret: process.env.JWT_SECRET,
});

@Module({
  imports: [DatabaseModule, JWTCoreModule],
  providers: [JwtService, PasswordService],
  exports: [JWTCoreModule, DatabaseModule, JwtService, PasswordService],
})
export class CoreModule {}
