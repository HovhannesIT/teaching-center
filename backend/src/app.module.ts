import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './Modules/Auth/auth.module';
import { JWTModule } from './Modules/core/jwt.module';
import { APP_PIPE } from '@nestjs/core';
import { DatabaseModule } from './Modules/core/database.module';

@Module({
  imports: [DatabaseModule, JWTModule, AuthModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
