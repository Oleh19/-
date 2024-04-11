import { FC } from 'react';
import './ErrorDisplay.css'

interface ErrorDisplayProps {
  error: string;
}

const ErrorDisplay: FC<ErrorDisplayProps> = ({ error }) => {
  return <div className='error'>Error: {error}</div>;
};

export default ErrorDisplay;
