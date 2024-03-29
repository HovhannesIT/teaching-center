import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AccessGuard } from '../../guards/access.guard';
import { AvatarInterceptor } from './avatar.interceptor';
import { RequestGuardedI } from '../../types/interfaces/request.guard';
import { UserService } from './user.service';
import { UpdateUserInfoDTO } from './dto/update-userinfo';

@Controller('user')
@UseGuards(AccessGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('info')
  async userInfo(@Req() req: RequestGuardedI) {
    return await this.userService.getInfo(req.user.id);
  }

  @Post('update-info')
  async updateUserInfo(
    @Body() info: UpdateUserInfoDTO,
    @Req() req: RequestGuardedI,
  ) {
    return await this.userService.updateInfo(req.user.id, info);
  }

  @Put('set-avatar')
  @UseInterceptors(AvatarInterceptor())
  async setAvatar(@UploadedFile() file) {
    return file;
  }
}
