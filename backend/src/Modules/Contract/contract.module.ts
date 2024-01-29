import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [CoreModule, AuthModule],
  controllers: [ContractController],
  providers: [ContractService],
  exports: [],
})
export class ContractModule {}
