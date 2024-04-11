import { WeatherData } from '../../shared/types/weather';
import { WeatherActionTypes } from './types';

export const fetchWeatherRequest = (city: string) => ({
  type: WeatherActionTypes.FETCH_WEATHER_REQUEST,
  payload: city,
});

export const fetchWeatherSuccess = (data: WeatherData) => ({
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error: string) => ({
  type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
  payload: error,
});
