import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './Modules/Auth/auth.module';
import { JWTModule, TypeOrmModule } from './core.modules';

import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule, JWTModule, AuthModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
