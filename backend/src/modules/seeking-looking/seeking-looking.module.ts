import { Module } from '@nestjs/common';
import { SeekingLookingController } from './seeking-looking.controller';
import { SeekingLookingService } from './seeking-looking.service';
import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [CoreModule, AuthModule],
  controllers: [SeekingLookingController],
  providers: [SeekingLookingService],
  exports: [],
})
export class SeekingLookingModule {}
