import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';

import { CoreModule } from './modules/Core/core.module';
import { AuthModule } from './modules/Auth/auth.module';
import { UserModule } from './modules/User/user.module';
import { SeekingLookingModule } from './modules/SeekingLooking/seeking-looking.module';
import { ContractModule } from './modules/Contract/contract.module';

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
