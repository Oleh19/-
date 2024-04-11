import './MainPage.css';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fetchWeatherRequest } from '../../../store/weather/actions';
import { TopBar, WeatherInfo } from '../../../widgets';
import { ErrorDisplay, LoadingIndicator } from '../../../entities';

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const [, setCity] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = (town: string) => {
    dispatch(fetchWeatherRequest(town));
    setCity('');
  };

  return (
    <div className='container'>
      <TopBar onSearch={handleSearch} />
      {loading && <LoadingIndicator />}
      {error && <ErrorDisplay error={error} />}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default MainPage;
