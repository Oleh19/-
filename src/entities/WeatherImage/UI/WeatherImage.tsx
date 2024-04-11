import { FC } from 'react';
import './WeatherImage.css'

interface WeatherImageProps {
  imageUrl: string;
  alt: string;
}

const WeatherImage: FC<WeatherImageProps> = ({ imageUrl, alt }) => {
  return (
    <div className='weatherImage'>
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default WeatherImage;
