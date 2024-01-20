import { Module } from '@nestjs/common';
import { CoreModule } from '../Core/core.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '../Auth/auth.module';

@Module({
  imports: [CoreModule, AuthModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
