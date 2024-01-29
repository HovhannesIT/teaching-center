import { JWTPayloadI } from '../../modules/core/services/types/jwt.types';

export interface RequestGuardedI extends Request {
  user: JWTPayloadI;
}
