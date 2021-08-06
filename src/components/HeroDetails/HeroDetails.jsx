import React from 'react';
import './HeroDetails.css';

const HeroDetails = props => {
  const { hero, selectedIndex, currentIndex } = props;

  return (
    selectedIndex === currentIndex && (
      <div className='hero-details' key={hero.name}>
        <div className='hero-details-text'>Played: {hero.game.games_played || '0'}</div>
        <div className='hero-details-text'>Won: {hero.game.games_won || '0'}</div>
        <div className='hero-details-text'>Lost: {hero.game.games_lost || '0'}</div>
        <div className='hero-details-text'>Win rate: {hero.game.win_percentage || '0'}%</div>
      </div>
    )
  );
};

export default HeroDetails;
