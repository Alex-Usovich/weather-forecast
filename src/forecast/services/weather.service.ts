import { Injectable } from '@nestjs/common';
import { ForecastModel } from '../models/forecast.model';
import { WeatherApiService } from './weather.api.service';
import { ForecastAPIResponseModel } from '../models/forecast.api.response.model';

@Injectable()
export class WeatherService {
  /**
   * @param weatherApiService
   */
  constructor(
    private readonly weatherApiService: WeatherApiService
  ) {}

  /**
   * Query params for retrieving data
   *
   * @param query
   */
  getData(query: ForecastModel): Promise<ForecastAPIResponseModel> {
    return this.weatherApiService.getData(query);
  }
}
