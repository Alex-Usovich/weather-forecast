import { Module } from '@nestjs/common';
import { ForecastController } from './forecast.controller';
import { ForecastService } from './services/forecast.service';
import { HttpModule } from '@nestjs/axios';
import { WeatherApiService } from './services/weather.api.service';
import { ForecastResolver } from './forecast.resolver';

@Module({
  imports: [HttpModule],
  controllers: [ForecastController],
  providers: [ForecastService, WeatherApiService, ForecastResolver],
})
export class ForecastModule {}
