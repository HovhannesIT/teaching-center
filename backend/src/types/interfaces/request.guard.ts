import { JWTPayloadI } from '../../modules/Core/services/types/jwt.types';

export interface RequestGuardedI extends Request {
  user: JWTPayloadI;
}
