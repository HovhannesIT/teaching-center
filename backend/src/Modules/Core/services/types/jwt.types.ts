import { UserTypesE } from '../../../../types';

export enum ExpiresInE {
  ACCESS_TOKEN = '15m',
  REFRESH_TOKEN = '2h',
}

export interface JWTPayloadI {
  id?: number;
  type?: UserTypesE;
  professionId?: number;
}
