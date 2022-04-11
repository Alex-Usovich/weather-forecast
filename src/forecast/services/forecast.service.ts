import { Injectable } from '@nestjs/common';
import { isSameDay, toDate } from 'date-fns';
import { ForecastModel } from '../models/forecast.model';
import { ForecastResponseModel } from '../models/forecast.response.model';
import { WeatherService } from './weather.service';

@Injectable()
export class ForecastService {

  /**
   * @param weatherService
   */
  constructor(
    private weatherService: WeatherService
  ) {}

  /**
   * Query params for retrieving data
   * @param query
   */
  async getWeatherForecast(query: ForecastModel): Promise<ForecastResponseModel> {
    const queryDate = new Date(query.date);
    const weatherData: any = await this.weatherService.getData(query);
    const requestedDate = weatherData.daily.find(day => {
      return isSameDay(toDate(day.dt * 1000), queryDate);
    });

    if (requestedDate && requestedDate.weather) {
      return {
        weatherDescription:
          requestedDate.weather
            .reduce((acc, current) => {
              if (current.description) {
                return acc.concat(current.description);
              }

            return acc;
            }, '')};
    }

    return { weatherDescription: 'no result' };
  }
}
