import { UserTypesE } from '../enums/UserTypes';

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
