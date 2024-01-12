export enum UserTypeE {
  TEACHER = 'teacher',
  STUDENT = 'student',
  BOTH = 'both',
}

export interface UserInterfaceI {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  type: UserTypeE;
  professionId: number;
  phoneNumber: string;
  birthDate: Date;
  avatar: string;
}
