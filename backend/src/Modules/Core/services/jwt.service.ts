import { Injectable } from '@nestjs/common';
import { JwtService as JWTNestService } from '@nestjs/jwt';
import { ExpiresInE, JWTPayloadI } from './types/jwt.types';

@Injectable()
export class JwtService {
  constructor(private readonly jwtService: JWTNestService) {}

  generateToken(payload: JWTPayloadI, expiresIn: ExpiresInE) {
    return this.jwtService.sign(payload, {
      expiresIn: expiresIn,
    });
  }

  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw error;
    }
  }
}
