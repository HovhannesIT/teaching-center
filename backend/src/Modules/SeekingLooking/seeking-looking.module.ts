import { Module } from '@nestjs/common';
import { SeekingLookingController } from './seeking-looking.controller';
import { SeekingLookingService } from './seeking-looking.service';
import { CoreModule } from '../Core/core.module';
import { AuthModule } from '../Auth/auth.module';

@Module({
  imports: [CoreModule, AuthModule],
  controllers: [SeekingLookingController],
  providers: [SeekingLookingService],
  exports: [],
})
export class SeekingLookingModule {}
