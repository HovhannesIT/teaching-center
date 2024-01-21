import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApplyInvitationDTO } from './dto/applyInvitation.dto';

@Controller('contract')
export class Contract {
  @Get('list')
  list() {}

  @Get('invitations-list')
  invitationsList() {}

  @Post('apply')
  applyInvitation(@Body() applyInvitation: ApplyInvitationDTO) {
    return applyInvitation;
  }
}
