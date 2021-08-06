import './TabPanel.css';

const TabPanel = props => {
  const { selectedIndex, currentIndex, children } = props;
  return selectedIndex === currentIndex && <div className='tab-panel'>{children}</div>;
};

export default TabPanel;
