import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './HeroDetails.css';

const HeroDetails = props => {
  const [statCategories, setStatCategories] = useState([]);
  const { hero, selectedIndex, currentIndex } = props;

  useEffect(() => {
    const categories = Object.keys(hero).flatMap(key => {
      return typeof hero[key] !== 'string' ? { category: key, value: hero[key] } : [];
    });

    setStatCategories(categories);
  }, [hero]);

  return (
    selectedIndex === currentIndex && (
      <div className='hero-details' key={hero.name}>
        {statCategories.map(cat => (
          <div className='hero-details-category'>
            <Header text={cat.category} priority='2' />
            <div className='hero-details-stats'>
              {Object.keys(cat.value).map(key => {
                const stat = cat.value[key];
                return (
                  <div className='hero-details-stat'>
                    <span>{stat}</span>
                    <span>{key.replace(/_/g, ' ')}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        {/* <div className='hero-details-text'>
          <span>{hero.game.games_played || '0'}</span>
          <span>Played</span>
        </div>
        <div className='hero-details-text'>
          <span>{hero.game.games_won || '0'}</span>
          <span>Won</span>
        </div>
        <div className='hero-details-text'>
          <span>{hero.game.games_lost || '0'}</span>
          <span>Lost</span>
        </div>
        <div className='hero-details-text'>
          <span>{hero.game.win_percentage || '0'}%</span>
          <span>Win rate </span>
        </div> */}
      </div>
    )
  );
};

export default HeroDetails;
