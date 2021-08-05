import './SearchInput.css';
import React from 'react';
import Spinner from 'react-loader-spinner';

const SearchInput = props => {
  const { handleClick, handleChange, isLoading, btnText, placeholder } = props;

  return (
    <div className='card search-input-wrapper'>
      <input
        className='search-input'
        type='text'
        onChange={handleChange}
        placeholder={placeholder}
        disabled={isLoading}
      />
      <button className='search-btn' onClick={handleClick} disabled={isLoading}>
        {isLoading ? <Spinner type='Oval' color='white' height='30' style={{ display: 'flex' }} /> : btnText}
      </button>
    </div>
  );
};

export default SearchInput;
