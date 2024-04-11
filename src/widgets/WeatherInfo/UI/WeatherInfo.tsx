import { FC } from 'react';
import './WeatherInfo.css';
import { WeatherData } from '../../../shared/types/weather';
import {
  LocationDisplay,
  TemperatureDisplay,
  WeatherDataDisplay,
  WeatherImage,
} from '../../../entities';

import clear from '../../../shared/assets/clear.png';
import cloud from '../../../shared/assets/cloud.png';
import snow from '../../../shared/assets/snow.png';

interface WeatherInfoProps {
  weatherData: WeatherData;
}

const WeatherInfo: FC<WeatherInfoProps> = ({ weatherData }) => {
  const { main, name, wind } = weatherData;

  const getWeatherImage = (temp: number): string => {
    if (temp > 20) {
      return clear;
    } else if (temp >= 0) {
      return cloud;
    } else {
      return snow;
    }
  };

  return (
    <>
      <WeatherImage
        imageUrl={getWeatherImage(+main.temp)}
        alt='Weather Image'
      />
      <TemperatureDisplay temperature={main.temp} />
      <LocationDisplay location={name} />
      <WeatherDataDisplay humidity={main.humidity} windSpeed={wind.speed} />
    </>
  );
};

export default WeatherInfo;
