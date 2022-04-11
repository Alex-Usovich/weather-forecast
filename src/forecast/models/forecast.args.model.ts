import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class ForecastArgsModel {
  @Field()
  lat: number;

  @Field()
  lon: number;

  @Field()
  date: string;
}
