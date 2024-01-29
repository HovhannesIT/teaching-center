import { Module } from '@nestjs/common';

import { JwtService } from './services/jwt.service';
import { PasswordService } from './services/password.service';
import { JwtModule as JWT } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { DatabaseModule } from './modules/database.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

dotenv.config();

const JWTCoreModule = JWT.register({
  secret: process.env.JWT_SECRET,
});

const ServePathModule = ServeStaticModule.forRoot({
  rootPath: join(__dirname, '..', 'public'),
});

const FilesModule = MulterModule.register({
  dest: join(__dirname, '..', 'public'),
});

@Module({
  imports: [DatabaseModule, ServePathModule, FilesModule, JWTCoreModule],
  providers: [JwtService, PasswordService],
  exports: [JWTCoreModule, DatabaseModule, JwtService, PasswordService],
})
export class CoreModule {}
