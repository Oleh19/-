import React, { FC, useEffect, useRef, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import './TopBar.css';

interface TopBarProps {
  onSearch: (city: string) => void;
}

const TopBar: FC<TopBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = () => {
    const trimmedCity = city.trim(); 
    onSearch(trimmedCity);
    setCity('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='topBar'>
      <input
        ref={inputRef}
        type='text'
        className='cityInput'
        placeholder='Search'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div className='searchIcon' onClick={handleSearch}>
        <IoIosSearch className='search' />
      </div>
    </div>
  );
};

export default TopBar;
