import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AccessGuard } from '../../guards/access.guard';

@Controller('user')
@UseGuards(AccessGuard)
export class UserController {
  @Put()
  @Get('user-info')
  async userInfo() {}

  @Post('update-user-info')
  async updateUserInfo() {}

  @Put('set-avatar')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        filename: (req, file, callback) => {
          const allowedExtensions = ['.jpg', '.jpeg', '.png'];

          const extension = extname(file.originalname);
          if (allowedExtensions.includes(extension)) {
            callback(null, `${req.user.id}${extension}`);
          } else {
            callback(new BadRequestException('Invalid file extension'), false);
          }
        },
      }),
    }),
  )
  async setAvatar(@UploadedFile() file) {
    return {
      originalname: file.originalname,
      filename: file.filename,
      size: file.size,
      mimetype: file.mimetype,
    };
  }

  @Get('avatar')
  async getAvatar() {}
}
