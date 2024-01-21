import { Controller, Post } from '@nestjs/common';

@Controller('seeking-looking')
export class SeekingLookingController {
  constructor() {}

  @Post('open')
  async open() {}
}
