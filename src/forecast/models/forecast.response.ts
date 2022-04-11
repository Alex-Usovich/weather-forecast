import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ForecastResponse {
  @Field()
  weatherDescription: string;
}
