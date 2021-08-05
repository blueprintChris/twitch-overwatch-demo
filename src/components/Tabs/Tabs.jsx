import React, { useEffect, useState } from 'react';
import TabButton from './TabButton/TabButton';
import TabPanel from './TabPanel/TabPanel';
import './Tabs.css';

const Tabs = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { buttons, children, isColumn } = props;

  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <div className={`tabs-wrapper ${isColumn ? 'column' : 'row'}`}>
      <div className={`tab-btn-wrapper ${isColumn ? 'row' : 'column'}`}>
        {buttons.map((btn, index) => (
          <TabButton handleClick={handleClick} text={btn} selectedIndex={selectedIndex} currentIndex={index} />
        ))}
      </div>
      {children.map((child, index) => (
        <TabPanel className='tabs-panel' selectedIndex={selectedIndex} currentIndex={index}>
          {child}
        </TabPanel>
      ))}
    </div>
  );
};

export default Tabs;
