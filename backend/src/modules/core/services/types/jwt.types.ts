import { UserTypesE } from '../../../../types';
import * as dotenv from 'dotenv';

dotenv.config();

const access = process.env.MODE === 'DEV' ? '12h' : '15m';
const refresh = process.env.MODE === 'DEV' ? '13h' : '12h';

export const ExpiresIn = {
  ACCESS_TOKEN: access,
  REFRESH_TOKEN: refresh,
};

export interface JWTPayloadI {
  id?: number;
  authId?: number;
  type?: UserTypesE;
  professionId?: number;
}
