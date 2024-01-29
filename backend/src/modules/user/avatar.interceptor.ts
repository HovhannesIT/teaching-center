import { BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

export const AvatarInterceptor = () =>
  FileInterceptor('avatar', {
    storage: diskStorage({
      destination: join(__dirname, '..', '..', 'public', 'avatars'),
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
  });
