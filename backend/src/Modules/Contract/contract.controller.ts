import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ApplyDTO } from './dto/apply.dto';
import { AccessGuard } from '../../guards/access.guard';
import { RequestGuardedI } from '../../types/interfaces/request.guard';

@Controller('contract')
@UseGuards(AccessGuard)
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Get('list')
  async list(@Req() request: RequestGuardedI) {
    return await this.contractService.list(request.user.id);
  }

  @Post('apply')
  async applyInvitation(
    @Body() data: ApplyDTO,
    @Req() request: RequestGuardedI,
  ) {
    return await this.contractService.applyInvitation(request.user.id, data);
  }
}
