
import  { FC } from 'react';
import './LocationDisplay.css'

interface LocationDisplayProps {
  location: string;
}

const LocationDisplay: FC<LocationDisplayProps> = ({ location }) => {
  return <div className='weatherLocation'>{location}</div>;
};

export default LocationDisplay;
