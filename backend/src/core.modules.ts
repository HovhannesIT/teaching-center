import { JwtModule as JWT } from '@nestjs/jwt';
import { TypeOrmModule as TypeOrm } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const JWTModule = JWT.register({
  secret: process.env.JWT_SECRET,
});

export const TypeOrmModule = TypeOrm.forRoot({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [],
  synchronize: true,
});
