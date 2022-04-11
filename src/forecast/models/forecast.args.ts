import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class ForecastArgs {
  @Field()
  lat: number;

  @Field()
  lon: number;

  @Field()
  date: string;
}
