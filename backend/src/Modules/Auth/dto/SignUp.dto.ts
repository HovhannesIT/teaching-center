import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { IsDateFormat } from '../../../customValidationFormats/date';
import { Column } from 'typeorm';

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

  @Column({ type: 'bigint', unsigned: true, nullable: false })
  professionId: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  phoneNumber: string;

  @IsNotEmpty()
  primaryCommunicationType: 'zoom' | 'skype' | 'google.meet';

  @IsNotEmpty()
  @IsString()
  @Validate(IsDateFormat)
  birthDate: Date;

  avatar?: string;
}
