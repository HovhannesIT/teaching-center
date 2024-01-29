import { UserTypesE } from '../enums/user-types';

export interface UserInterfaceI {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  type: UserTypesE;
  professionId: number;
  phoneNumber: string;
  birthDate: Date;
  avatar: string;
}
