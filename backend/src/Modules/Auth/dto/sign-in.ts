import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignInDto {
  @MinLength(6)
  @IsString()
  @IsOptional()
  username?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(12)
  @MaxLength(24)
  password: string;
}
