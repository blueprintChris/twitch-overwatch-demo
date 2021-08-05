import React from 'react';
import './TabButton.css';

const TabButton = props => {
  const { text, handleClick, selectedIndex, currentIndex } = props;
  return (
    <button
      className={`tab-btn ${selectedIndex === currentIndex && 'selected'}`}
      onClick={() => handleClick(currentIndex)}
    >
      {text}
    </button>
  );
};

export default TabButton;
