import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class OpenDTO {
  @IsNumber()
  @IsNotEmpty()
  professionId: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(24)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(100)
  description: string;

  @IsNotEmpty()
  communicationType: 'zoom' | 'skype' | 'google.meet';
}
