import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { PriceTypesE } from '../../../types/enums/price-types';
import { ContractTypeE } from '../../../types/enums/contract-type';
import { CurrenciesE } from '../../../types/enums/currencies';

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
