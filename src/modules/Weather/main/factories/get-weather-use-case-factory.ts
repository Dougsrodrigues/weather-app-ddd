import { makeAxiosHttpClient } from '@/app/main/factories/axios-http-client-factory';
import { GetCurrentWeatherUseCase } from '../../use-cases/get-current-weather';

export const makeGetWeatherUseCase = () =>
  new GetCurrentWeatherUseCase(makeAxiosHttpClient());
