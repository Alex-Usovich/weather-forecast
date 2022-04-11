import { Test, TestingModule } from '@nestjs/testing';
import { ForecastService } from '../services/forecast.service';
import { ForecastController } from '../forecast.controller';
import { ForecastModel } from '../models/forecast.model';

describe('ForecastController', () => {
  let forecastController: ForecastController;
  let forecastService: ForecastService;

  beforeEach(async () => {
    const ForecastServiceProvider = {
      provide: ForecastService,
      useFactory: () => ({
        getWeatherForecast: jest.fn(() => []),
      })
    }

    const forecast: TestingModule = await Test.createTestingModule({
      controllers: [ForecastController],
      providers: [ForecastService, ForecastServiceProvider],
    }).compile();

    forecastController = forecast.get<ForecastController>(ForecastController);
    forecastService = forecast.get<ForecastService>(ForecastService);
  });

  describe('forecast', () => {

    it("calling getWeatherForecast method", () => {
      const dto = new ForecastModel();
      expect(forecastController.getWeatherForecast(dto)).not.toEqual(null);
    })

    it("calling getWeatherForecast method", () => {
      const dto = new ForecastModel();
      forecastController.getWeatherForecast(dto);
      expect(forecastService.getWeatherForecast).toHaveBeenCalled();
      expect(forecastService.getWeatherForecast).toHaveBeenCalledWith(dto);
    })

    it('should return some value', async () => {
      const result = { weatherDescription: 'some value' };
      const args: ForecastModel = { lat: 33.00, lon: -94.00, date: '2022-04-07' };
      jest.spyOn(forecastService, 'getWeatherForecast').mockImplementation(async () => result);

      expect(await forecastController.getWeatherForecast(args)).toBe(result);
    });
  });
});
