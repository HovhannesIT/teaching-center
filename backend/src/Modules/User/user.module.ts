import { Module } from '@nestjs/common';
import { CoreModule } from '../Core/core.module';
import { MulterModule } from '@nestjs/platform-express';
import { UserController } from './user.controller';
import { AuthService } from '../Auth/auth.service';

@Module({
  imports: [
    CoreModule,
    MulterModule.register({
      dest: './avatars',
    }),
  ],
  providers: [AuthService],
  controllers: [UserController],
})
export class UserModule {}
