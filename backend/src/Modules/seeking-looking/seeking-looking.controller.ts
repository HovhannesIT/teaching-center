import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AccessGuard } from '../../guards/access.guard';
import { SeekingLookingService } from './seeking-looking.service';
import { OpenDTO } from './dto/apply.dto';
import { RequestGuardedI } from '../../types/interfaces/request.guard';

@Controller('seeking-looking')
export class SeekingLookingController {
  constructor(private readonly seekingLookingService: SeekingLookingService) {}

  @Put('open')
  @UseGuards(AccessGuard)
  async open(@Req() req: RequestGuardedI, @Body() open: OpenDTO) {
    return await this.seekingLookingService.create(req.user.id, open);
  }

  @Post('apply/:id')
  @UseGuards(AccessGuard)
  async apply(@Param('id') id: string, @Req() req: RequestGuardedI) {
    return await this.seekingLookingService.apply(Number(id), req.user.id);
  }

  @Get('list/global')
  async globalList() {
    return await this.seekingLookingService.list();
  }

  @Get('list/current')
  @UseGuards(AccessGuard)
  async currentList(@Req() req: RequestGuardedI) {
    return await this.seekingLookingService.list(req.user.id);
  }
}
