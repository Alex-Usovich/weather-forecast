import { ForecastModel } from '../../models/forecast.model';
import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from '../weather.service';

class ApiServiceMock {
  getData(dto: ForecastModel) {
    return { };
  }
}
describe.only("WeatherService", () => {

  let weatherService: WeatherService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: WeatherService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherService, ApiServiceProvider
      ],
    }).compile();

    weatherService = module.get<WeatherService>(WeatherService);
  })

  it('should call getData method with expected params', async () => {
    const getData = jest.spyOn(weatherService, 'getData');
    const dto = new ForecastModel();
    await weatherService.getData(dto);
    expect(getData).toHaveBeenCalledWith(dto);
  });
})
