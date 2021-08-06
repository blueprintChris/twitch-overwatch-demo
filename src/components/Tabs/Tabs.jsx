import React from 'react';
import TabButton from './TabButton/TabButton';
import TabPanel from './TabPanel/TabPanel';
import './Tabs.css';

const Tabs = props => {
  const { buttons, children, isColumn, selectedIndex, setSelectedIndex } = props;

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <div className={`tabs-wrapper ${isColumn ? 'row' : 'column'}`}>
      <div className={`tab-btn-wrapper ${isColumn ? 'column' : 'row'}`}>
        {buttons.map((btn, index) => (
          <TabButton
            handleClick={handleClick}
            text={btn}
            selectedIndex={selectedIndex}
            currentIndex={index}
            className={isColumn ? 'btn-column' : ''}
          />
        ))}
      </div>
      {children
        ? children.map((child, index) => (
            <TabPanel selectedIndex={selectedIndex} currentIndex={index}>
              {child}
            </TabPanel>
          ))
        : null}
    </div>
  );
};

export default Tabs;
