import { Transform } from 'class-transformer';

export class ForecastAPIResponseModel {
  @Transform(({ value } ) => value.weather)
  weather: ForecastWeatherAPIResponse[];
}

export class ForecastWeatherAPIResponse {
  @Transform(({ value } ) => value.description)
  description: string;
}
