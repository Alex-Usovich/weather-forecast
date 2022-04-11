import { Module } from '@nestjs/common';
import { ForecastController } from './forecast.controller';
import { ForecastService } from './services/forecast.service';
import { HttpModule } from '@nestjs/axios';
import { WeatherApiService } from './services/weather.api.service';
import { ForecastResolver } from './forecast.resolver';
import { ConfigModule } from '@nestjs/config';
import { WeatherService } from './services/weather.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [ForecastController],
  providers: [ForecastService, WeatherService, WeatherApiService, ForecastResolver],
})
export class ForecastModule {}
