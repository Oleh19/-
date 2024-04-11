import { FC } from 'react';
import './WeatherDataDisplay.css';

interface WeatherDataDisplayProps {
  humidity: string;
  windSpeed: string;
}

const WeatherDataDisplay: FC<WeatherDataDisplayProps> = ({
  humidity,
  windSpeed,
}) => {
  return (
    <div className='dataContainer'>
      <div className='element'>
        <div className='text'>Humidity</div>
        <div className='data'>{humidity}%</div>
      </div>
      <div className='element'>
        <div className='text'>Wind Speed</div>
        <div className='data'>{windSpeed} km/h</div>
      </div>
    </div>
  );
};

export default WeatherDataDisplay;
