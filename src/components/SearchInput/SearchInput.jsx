import './SearchInput.css';
import React from 'react';

const SearchInput = props => {
  const { handleClick, handleChange } = props;
  return (
    <div className='search-input-wrapper'>
      <input className='search-input' type='text' onChange={handleChange} placeholder='i.e. bob#12345' />
      <button className='search-btn' onClick={handleClick}>
        Flex
      </button>
    </div>
  );
};

export default SearchInput;
