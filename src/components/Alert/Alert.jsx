import React from 'react';
import './Alert.css';

const Alert = props => {
  const { text } = props;
  return (
    <div className='alert'>
      <span className='alert-text'>{text}</span>
    </div>
  );
};

export default Alert;
