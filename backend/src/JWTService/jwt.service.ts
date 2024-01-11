import { Injectable } from '@nestjs/common';
import { JwtService as JWTNestService } from '@nestjs/jwt';
import { ExpiresInE, JWTPayloadI } from './jwt.types';

@Injectable()
export class JwtService {
  constructor(private readonly jwtService: JWTNestService) {}

  async generateToken(
    payload: JWTPayloadI,
    expiresIn: ExpiresInE,
  ): Promise<string> {
    return await this.jwtService.sign(payload, {
      expiresIn: expiresIn,
    });
  }

  async verifyToken(token: string): Promise<JWTPayloadI> {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw error;
    }
  }
}
