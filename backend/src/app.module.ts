import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { JwtModule as JWT } from '@nestjs/jwt';
import { AuthModule } from './Auth/auth.module';

const JWTModule = JWT.register({
  secret: process.env.JWT_SECRET,
});

@Module({
  imports: [JWTModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
