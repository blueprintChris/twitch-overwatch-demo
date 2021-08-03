import './PlayerRanks.css';
import React from 'react';

const PlayerRanks = props => {
  const { playerStats } = props;
  const { competitive_rank } = playerStats.stats;

  const handleRankImage = rank => {
    switch (true) {
      case rank < 1500:
        return 'bronze';

      case rank >= 1500 && rank < 2000:
        return 'silver';

      case rank >= 2000 && rank < 2500:
        return 'gold';

      case rank >= 2500 && rank < 3000:
        return 'plat';

      case rank >= 3000 && rank < 3500:
        return 'diamond';

      case rank >= 3500 && rank < 4000:
        return 'master';

      case rank >= 4000:
        return 'gm';

      default:
        console.log('default?!?!');
    }
  };

  return (
    <div className='player-stats-wrapper'>
      <div className='player-stats'>
        {Object.keys(competitive_rank).map(key => {
          const rank = competitive_rank[key];
          return (
            <div className='player-stats-stat' key={key}>
              <h3>{key}</h3>
              <img
                src={`images/ow_${handleRankImage(competitive_rank.tank)}.png`}
                width='30'
                height='30'
                alt='rank-img'
              />
              <div>{rank}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerRanks;
