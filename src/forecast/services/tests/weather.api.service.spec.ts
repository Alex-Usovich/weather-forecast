import { ForecastModel } from '../../models/forecast.model';
import { Test, TestingModule } from '@nestjs/testing';
import { WeatherApiService } from '../weather.api.service';

class ApiServiceMock {
  getData(dto: ForecastModel) {
    return { };
  }
}
describe.only("WeatherApiService", () => {

  let weatherApiService: WeatherApiService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: WeatherApiService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherApiService, ApiServiceProvider
      ],
    }).compile();

    weatherApiService = module.get<WeatherApiService>(WeatherApiService);
  })

  it('should call getData method with expected params', async () => {
    const getData = jest.spyOn(weatherApiService, 'getData');
    const dto = new ForecastModel();
    await weatherApiService.getData(dto);
    expect(getData).toHaveBeenCalledWith(dto);
  });
})
