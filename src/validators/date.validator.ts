import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { add, endOfDay, isAfter, isBefore, isValid, startOfDay } from 'date-fns';

@ValidatorConstraint({ name: 'isValidShortDate', async: false })
export class DateValidator implements ValidatorConstraintInterface {
  validate(date: string, args: ValidationArguments) {
    const today = new Date();
    const requestedDate = new Date(date);

    return isValid(requestedDate)
      && isAfter(requestedDate, startOfDay(today))
      && isBefore(requestedDate, add(endOfDay(today), { weeks: 1}));
  }

  defaultMessage(args: ValidationArguments) {
    return 'The provided date is not valid';
  }
}
