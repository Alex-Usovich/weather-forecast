import { Controller, Get, Query } from '@nestjs/common';
import { ForecastService } from './services/forecast.service';
import { ForecastModel } from './models/forecast.model';

@Controller('forecast')
export class ForecastController {

  /**
   * @param forecastService
   */
  constructor(
    private readonly forecastService: ForecastService
  ) {}

  /**
   * Query params for retrieving data
   * @param query
   */
  @Get('daily')
  getWeatherForecast(@Query() query: ForecastModel): any {
    return this.forecastService.getWeatherForecast(query);
  }
}
