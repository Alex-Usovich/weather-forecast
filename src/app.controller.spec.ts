import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ForecastArgs } from './forecast/models/forecast.args';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('app', () => {

    it("app controller to be defined", () => {
      expect(appController).toBeDefined();
    })
  });


});
