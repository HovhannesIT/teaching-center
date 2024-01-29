import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { IsDateFormat } from '../../../dto-validation-formats/date';
import { Column } from 'typeorm';

export class UpdateUserInfoDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(24)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(24)
  lastName: string;

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
}
