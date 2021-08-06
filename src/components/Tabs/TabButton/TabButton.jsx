import React from 'react';
import './TabButton.css';

const TabButton = props => {
  const { text, handleClick, selectedIndex, currentIndex, className } = props;
  return (
    <button
      className={`tab-btn ${selectedIndex === currentIndex ? 'selected' : ''} ${className}`}
      onClick={() => handleClick(currentIndex)}
    >
      {text}
    </button>
  );
};

export default TabButton;
