import React from 'react';
import './Header.css';

const Header = props => {
  const { priority, text } = props;

  const Tag = `h${priority}`;

  return (
    <div className='header-wrapper'>
      <Tag>{text}</Tag>
    </div>
  );
};

export default Header;
