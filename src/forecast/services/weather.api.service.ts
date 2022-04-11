import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ForecastModel } from '../models/forecast.model';

@Injectable()
export class WeatherApiService {
  constructor(private readonly httpService: HttpService) {}

  async getData(query: ForecastModel): Promise<AxiosResponse<any>> {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${+query.lat}&lon=${+query.lon}&exclude=current,minutely,hourly,alerts&appid=3911823ddcd7a4224657c95619c0bba4`;

    return await lastValueFrom(this.httpService.get(url).pipe(map(response => response.data)));
  }
}
