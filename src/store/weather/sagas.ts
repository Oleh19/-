import { put, takeLatest, call } from 'redux-saga/effects';
import { WeatherActionTypes } from './types';
import { fetchWeatherSuccess, fetchWeatherFailure } from './actions';
import { SagaIterator } from 'redux-saga';
import { WeatherData } from '../../shared/types/weather';

const CACHE_DURATION = 10 * 60 * 1000;
const cache: { [key: string]: { data: WeatherData; timestamp: number } } = {};

function* fetchWeather(action: any): SagaIterator {
  try {
    const city = action.payload;
    const api_key = '6bc54a27673a5df932c6b345c4df10c7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const lastCachedData = cache[city];
    const currentTime = Date.now();

    if (
      lastCachedData &&
      currentTime - lastCachedData.timestamp < CACHE_DURATION
    ) {
      yield put(fetchWeatherSuccess(lastCachedData.data));
      return;
    }

    const response = yield call(fetch, url);
    const data = yield response.json();

    const weatherData: WeatherData = {
      coord: data.coord,
      weather: data.weather,
      base: data.base,
      main: {
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      },
      visibility: data.visibility,
      wind: data.wind,
      clouds: data.clouds,
      dt: data.dt,
      sys: data.sys,
      timezone: data.timezone,
      id: data.id,
      name: data.name,
      cod: data.cod,
    };

    cache[city] = { data: weatherData, timestamp: currentTime };

    yield put(fetchWeatherSuccess(weatherData));
  } catch (error: any) {
    yield put(fetchWeatherFailure(error.message));
  }
}

export function* weatherSaga(): SagaIterator {
  yield takeLatest(WeatherActionTypes.FETCH_WEATHER_REQUEST, fetchWeather);
}
