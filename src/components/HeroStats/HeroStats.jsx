import './HeroStats.css';
import React, { useEffect, useState } from 'react';
import Tabs from '../Tabs/Tabs';
import HeroDetails from '../HeroDetails/HeroDetails';

const HeroStats = props => {
  const [heroNames, setHeroNames] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { playerStats, isComp } = props;
  const { competitive, quickplay } = playerStats.stats;

  useEffect(() => {
    const heroes = Object.keys(quickplay).map(key => {
      return quickplay[key].raw_name;
    });

    setHeroNames(heroes);
  }, [quickplay]);

  return (
    <div className='card hero-wrapper'>
      <Tabs buttons={heroNames} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} isColumn={true}>
        {Object.keys(isComp ? competitive : quickplay).map((key, index) => {
          const hero = isComp ? competitive[key] : quickplay[key];
          return <HeroDetails hero={hero} selectedIndex={selectedIndex} currentIndex={index} />;
        })}
      </Tabs>
    </div>
  );
};

export default HeroStats;
