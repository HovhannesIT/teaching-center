import { Module } from '@nestjs/common';

import { JwtService } from './services/jwt.service';
import { PasswordService } from './services/password.service';

@Module({
  imports: [JwtService, PasswordService],
})
export class StateLessServices {}
