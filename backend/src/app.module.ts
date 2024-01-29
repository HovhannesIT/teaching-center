import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';

import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { SeekingLookingModule } from './modules/seeking-looking/seeking-looking.module';
import { ContractModule } from './modules/contract/contract.module';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    UserModule,
    SeekingLookingModule,
    ContractModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
