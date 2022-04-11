import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ForecastModel } from '../models/forecast.model';
import { getDataFromResponse } from '../../common/utils/get-data-from-response';
import { ConfigService } from '@nestjs/config';
import { ForecastAPIResponseModel } from '../models/forecast.api.response.model';
import { WEATHER_API_URL_FIRST_PART, WEATHER_API_URL_SECOND_PART } from '../../common/constants/weathe-api.constants';

@Injectable()
export class WeatherApiService {
  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

  /**
   * Query params for retrieving data
   *
   * @param query
   */
  async getData(query: ForecastModel): Promise<ForecastAPIResponseModel> {
    const URL_API_KEY = this.configService.get<string>('WEATHER_API_KEY');
    const url = `${WEATHER_API_URL_FIRST_PART}&lat=${query.lat}&lon=${query.lon}${WEATHER_API_URL_SECOND_PART}${URL_API_KEY}`;

    return await getDataFromResponse(this.httpService, url);
  }
}
