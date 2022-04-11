import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ForecastResponseModel {
  @Field()
  weatherDescription: string;
}
