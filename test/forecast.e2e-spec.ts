import { ForecastModule } from '../src/forecast/forecast.module';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ForecastService } from '../src/forecast/services/forecast.service';
import { format } from 'date-fns';

describe('Forecast Controller (e2e)', () => {
  let app: INestApplication;
  let forecastService = { getWeatherForecast: (query) => ({ weatherDescription: 'some' }) };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ForecastModule],
    })
      .overrideProvider(ForecastService)
      .useValue(forecastService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET forecast/daily`, () => {
    const shortDate = format(new Date(), 'yyyy-MM-dd');
    const query = `?lat=33.00&lon=-94.00&date=${shortDate}`;
    const expectedValue = { weatherDescription: 'some' };

    return request(app.getHttpServer())
      .get(`/forecast/daily${query}`)
      .expect(200)
      .expect(
        expectedValue
      );
  });

  afterAll(async () => {
    await app.close();
  });
});
