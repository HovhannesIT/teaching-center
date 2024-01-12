export enum ExpiresInE {
  ACCESS_TOKEN = '15m',
  REFRESH_TOKEN = '2h',
}

export interface JWTPayloadI {
  nickName: string;
  userId: number;
}
