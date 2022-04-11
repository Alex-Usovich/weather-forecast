import { Args, Query, Resolver } from '@nestjs/graphql';
import { ForecastService } from './services/forecast.service';
import { ForecastArgs } from './models/forecast.args';
import { ForecastResponse } from './models/forecast.response';

@Resolver()
export class ForecastResolver {
  constructor(
    private readonly forecastService: ForecastService
  ) {}

  @Query(returns => ForecastResponse)
  async forecast(@Args() args: ForecastArgs) {
    return this.forecastService.getWeatherForecast(args);
  }

}
