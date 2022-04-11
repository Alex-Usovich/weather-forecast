import { Injectable } from '@nestjs/common';
import { WeatherApiService } from './weather.api.service';
import { isSameDay, toDate } from 'date-fns';
import { ForecastModel } from '../models/forecast.model';

@Injectable()
export class ForecastService {
  constructor(
    private weatherOpenApiService: WeatherApiService
  ) {}

  async getWeatherForecast(query: ForecastModel): Promise<any> {
    const queryDate = new Date(query.date);
    const weatherData: any = await this.weatherOpenApiService.getData(query);
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
