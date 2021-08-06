import React from 'react';
import './HeroDetails.css';

const HeroDetails = props => {
  const { hero, selectedIndex, currentIndex } = props;

  return (
    selectedIndex === currentIndex && (
      <div className='hero-details' key={hero.name}>
        <div className='hero-details-text'>
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
        </div>
      </div>
    )
  );
};

export default HeroDetails;
