import { IsDecimal, Validate } from 'class-validator';
import { DateValidator } from '../../common/validators/date.validator';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ForecastModel {
  @IsDecimal()
  lat: number;

  @IsDecimal()
  lon: number;

  @Validate(DateValidator)
  date: string;
}
