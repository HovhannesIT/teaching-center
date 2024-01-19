import {
  Controller,
  Get,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AccessGuard } from '../../guards/access.guard';
import { AvatarInterceptor } from './avatar.interceptor';

@Controller('user')
@UseGuards(AccessGuard)
export class UserController {
  @Put()
  @Get('user-info')
  async userInfo() {}

  @Post('update-user-info')
  async updateUserInfo() {}

  @Put('set-avatar')
  @UseInterceptors(AvatarInterceptor())
  async setAvatar(@UploadedFile() file) {
    return file;
  }

  @Get('avatar')
  async getAvatar() {}
}
