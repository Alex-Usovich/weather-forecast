import { ForecastModel } from '../../models/forecast.model';
import { ForecastService } from '../forecast.service';
import { Test, TestingModule } from '@nestjs/testing';

class ApiServiceMock {
  getWeatherForecast(dto: ForecastModel) {
    return { weatherDescription: 'some weather' };
  }
}
describe.only("ForecastService", () => {

  let forecastService: ForecastService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ForecastService,
      useClass: ApiServiceMock,
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ForecastService, ApiServiceProvider
      ],
    }).compile();
    forecastService = module.get<ForecastService>(ForecastService);
  })

  it('should call getWeatherForecast method with expected params', async () => {
    const getWeatherForecastSpy = jest.spyOn(forecastService, 'getWeatherForecast');
    const dto = new ForecastModel();
    await forecastService.getWeatherForecast(dto);
    expect(getWeatherForecastSpy).toHaveBeenCalledWith(dto);
  });

  it('should retrieve data from getWeatherForecast with some forecast params', async () => {
    const dto = new ForecastModel();
    expect(forecastService.getWeatherForecast(dto)).toStrictEqual({ weatherDescription: 'some weather' });
  });
})
