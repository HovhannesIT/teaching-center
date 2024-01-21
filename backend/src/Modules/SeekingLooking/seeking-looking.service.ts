import { Injectable } from '@nestjs/common';
import { SeekingLookingListE } from '../../types/enums/SeekingLookingListE';

@Injectable()
export class SeekingLookingService {
  async createSeekingLooking() {}

  async apply() {}

  async list(type: SeekingLookingListE) {
    return type;
  }
}
