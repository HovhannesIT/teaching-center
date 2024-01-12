import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './Modules/Auth/auth.module';
import { JWTModule, TypeOrmModule } from './core.modules';

@Module({
  imports: [TypeOrmModule, JWTModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
