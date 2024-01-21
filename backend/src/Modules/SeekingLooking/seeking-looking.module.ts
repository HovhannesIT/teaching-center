import { Module } from '@nestjs/common';
import { SeekingLookingController } from './seeking-looking.controller';
import { SeekingLookingService } from './seeking-looking.service';

@Module({
  imports: [SeekingLookingController],
  providers: [SeekingLookingService],
  exports: [],
})
export class SeekingLookingModule {}
