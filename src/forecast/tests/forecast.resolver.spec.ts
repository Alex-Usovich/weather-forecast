import { Test, TestingModule } from '@nestjs/testing';
import { ForecastService } from '../services/forecast.service';
import { ForecastModel } from '../models/forecast.model';
import { ForecastResolver } from '../forecast.resolver';
import { ForecastArgsModel } from '../models/forecast.args.model';

describe('ForecastResolver', () => {
  let forecastResolver: ForecastResolver;
  let forecastService: ForecastService;

  beforeEach(async () => {
    const ForecastServiceProvider = {
      provide: ForecastService,
      useFactory: () => ({
        getWeatherForecast: jest.fn(() => []),
      })
    }

    const forecast: TestingModule = await Test.createTestingModule({
      controllers: [ForecastResolver],
      providers: [ForecastService, ForecastServiceProvider],
    }).compile();

    forecastResolver = forecast.get<ForecastResolver>(ForecastResolver);
    forecastService = forecast.get<ForecastService>(ForecastService);
  });

  describe('forecast', () => {

    it("calling forecast method", () => {
      const dto = new ForecastArgsModel();
      expect(forecastResolver.forecast(dto)).not.toEqual(null);
    })

    it("calling forecast method", () => {
      const dto = new ForecastArgsModel();
      forecastResolver.forecast(dto);
      expect(forecastService.getWeatherForecast).toHaveBeenCalled();
      expect(forecastService.getWeatherForecast).toHaveBeenCalledWith(dto);
    })

    it('should return some value', async () => {
      const result = { weatherDescription: 'some value' };
      const args: ForecastModel = { lat: 33.00, lon: -94.00, date: '2022-04-07' };
      jest.spyOn(forecastService, 'getWeatherForecast').mockImplementation(async () => result);

      expect(await forecastResolver.forecast(args)).toBe(result);
    });
  });
});
