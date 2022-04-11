import { Args, Query, Resolver } from '@nestjs/graphql';
import { ForecastService } from './services/forecast.service';
import { ForecastArgsModel } from './models/forecast.args.model';
import { ForecastResponseModel } from './models/forecast.response.model';

@Resolver()
export class ForecastResolver {

  /**
   * @param forecastService
   */
  constructor(
    private readonly forecastService: ForecastService
  ) {}

  /**
   * Query arguments for retrieving data
   * @param args
   */
  @Query(returns => ForecastResponseModel)
  async forecast(@Args() args: ForecastArgsModel) {
    return this.forecastService.getWeatherForecast(args);
  }

}
