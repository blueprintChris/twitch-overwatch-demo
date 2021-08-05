const TabPanel = props => {
  const { selectedIndex, currentIndex, children } = props;
  return selectedIndex === currentIndex && children;
};

export default TabPanel;
