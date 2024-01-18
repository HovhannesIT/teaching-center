import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';

import { AuthModule } from './Modules/Auth/auth.module';
import { CoreModule } from './Modules/Core/core.module';
@Module({
  imports: [CoreModule, AuthModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
