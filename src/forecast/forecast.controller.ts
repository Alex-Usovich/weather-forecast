import { Controller, Get, Query } from '@nestjs/common';
import { ForecastService } from './services/forecast.service';
import { ForecastModel } from './models/forecast.model';

@Controller('forecast')
export class ForecastController {
  constructor(
    private readonly forecastService: ForecastService
  ) {}

  @Get('daily')
  getWeatherForecast(@Query() query: ForecastModel): any {
    return this.forecastService.getWeatherForecast(query);
  }
}
