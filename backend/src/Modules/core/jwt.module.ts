import { JwtModule as JWT } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config();

export const JWTModule = JWT.register({
  secret: process.env.JWT_SECRET,
});
