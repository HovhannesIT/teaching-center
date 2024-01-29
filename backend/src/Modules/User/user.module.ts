import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [CoreModule, AuthModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
