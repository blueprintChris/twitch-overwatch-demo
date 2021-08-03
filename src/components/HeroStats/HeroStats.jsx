import './HeroStats.css';
import React from 'react';

const HeroStats = props => {
  const { playerStats } = props;
  const { competitive } = playerStats.stats;

  return (
    <div className='hero-wrapper'>
      <div className='heroes'>
        {Object.keys(competitive).map(key => {
          const hero = competitive[key];
          return (
            <div className='hero-row' key={hero.name}>
              <div className='hero-name'>{hero.name}</div>
              <div className='hero-details'>
                <div className='hero-details-text'>Played: {hero.game.games_played || '0'}</div>
                <div className='hero-details-text'>Won: {hero.game.games_won || '0'}</div>
                <div className='hero-details-text'>Lost: {hero.game.games_lost || '0'}</div>
                <div className='hero-details-text'>Win rate: {hero.game.win_percentage || '0'}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroStats;
