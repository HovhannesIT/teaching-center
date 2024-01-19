import * as moment from 'moment';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isDateFormat', async: false })
export class IsDateFormat implements ValidatorConstraintInterface {
  validate(value: any) {
    if (typeof value !== 'string') {
      return false;
    }

    const format = 'YYYY-MM-DD';
    return moment(value, format, true).isValid();
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be in the specified date format (YYYY-MM-DD)`;
  }
}
