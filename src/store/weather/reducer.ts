import { WeatherState, WeatherAction, WeatherActionTypes } from './types';

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  lastUpdated: 0,
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER_REQUEST:
      return { ...state, loading: true, error: null };
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        lastUpdated: Date.now(),
      };
    case WeatherActionTypes.FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
