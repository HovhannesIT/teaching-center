import { JWTPayloadI } from '../../modules/Core/services/types/jwt.types';

export interface RequestGuardI extends Request {
  user: JWTPayloadI;
}
