import { WeatherData } from '../../shared/types/weather';

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
  lastUpdated: number;
}

export enum WeatherActionTypes {
  FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE',
}

interface FetchWeatherRequestAction {
  type: typeof WeatherActionTypes.FETCH_WEATHER_REQUEST;
  payload: string;
}

interface FetchWeatherSuccessAction {
  type: typeof WeatherActionTypes.FETCH_WEATHER_SUCCESS;
  payload: WeatherData;
}

interface FetchWeatherFailureAction {
  type: typeof WeatherActionTypes.FETCH_WEATHER_FAILURE;
  payload: string;
}

export type WeatherAction =
  | FetchWeatherRequestAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction;
