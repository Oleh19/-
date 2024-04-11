import { FC } from 'react';
import './TemperatureDisplay.css';

interface TemperatureDisplayProps {
  temperature: string;
}

const TemperatureDisplay: FC<TemperatureDisplayProps> = ({ temperature }) => {
  return <div className='weatherTemp'>{temperature} °C</div>;
};

export default TemperatureDisplay;
