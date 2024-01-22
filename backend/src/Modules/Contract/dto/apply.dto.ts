import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { PriceTypesE } from '../../../types/enums/PriceTypes';
import { ContractTypeE } from '../../../types/enums/ContractType';
import { CurrenciesE } from '../../../types/enums/Currencies';

export class ApplyDTO {
  @IsNumber()
  @IsNotEmpty()
  invitationId: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(200)
  description: string;

  @IsEnum(PriceTypesE)
  @IsNotEmpty()
  priceType: PriceTypesE;

  @IsEnum(ContractTypeE)
  @IsNotEmpty()
  contractType: ContractTypeE;

  @IsEnum(CurrenciesE)
  @IsNotEmpty()
  currency: CurrenciesE;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
