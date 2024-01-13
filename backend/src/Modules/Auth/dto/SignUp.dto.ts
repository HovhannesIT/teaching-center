import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(24)
  firsName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(24)
  lastName: string;

  @MinLength(6)
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(12)
  @MaxLength(24)
  password: string;

  @IsNotEmpty()
  type: 'teacher' | 'student' | 'both';

  @IsNotEmpty()
  professionId: number;

  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;

  @IsNotEmpty()
  primaryCommunicationType: 'zoom' | 'skype' | 'google.meet';

  @IsNotEmpty()
  @IsDate()
  birthDate: Date;

  avatar?: string;
}
