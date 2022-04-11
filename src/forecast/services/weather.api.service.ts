import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ForecastModel } from '../models/forecast.model';
import { getDataFromResponse } from '../../utils/get-data-from-response';
import { ConfigService } from '@nestjs/config';
import { ForecastAPIResponseModel } from '../models/forecast.api.response.model';

@Injectable()
export class WeatherApiService {
  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

  /**
   * Query params for retrieving data
   *
   * @param query
   */
  async getData(query: ForecastModel): Promise<ForecastAPIResponseModel> {
    const urlFirstPart = this.configService.get<string>('WEATHER_API_URL_FIRST_PART');
    const urlSecondPart = this.configService.get<string>('WEATHER_API_URL_SECOND_PART');
    const urlApiKey = this.configService.get<string>('WEATHER_API_KEY');
    const url = `${urlFirstPart}&lat=${query.lat}&lon=${query.lon}${urlSecondPart}${urlApiKey}`;

    return await getDataFromResponse(this.httpService, url);
  }
}
