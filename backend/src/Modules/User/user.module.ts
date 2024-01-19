import { Module } from '@nestjs/common';
import { CoreModule } from '../Core/core.module';
import { UserController } from './user.controller';
import { AuthService } from '../Auth/auth.service';

@Module({
  imports: [CoreModule],
  providers: [AuthService],
  controllers: [UserController],
})
export class UserModule {}
