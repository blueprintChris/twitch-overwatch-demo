import './PlayerRanks.css';
import React from 'react';

const PlayerRanks = props => {
  const { playerStats } = props;
  const { competitive_rank } = playerStats.stats;

  const isInRange = (x, min, max) => {
    return x >= min && x <= max;
  };

  const handleRankImage = rank => {
    if (isInRange(rank, 0, 1500)) return 'bronze';
    if (isInRange(rank, 1500, 2000)) return 'silver';
    if (isInRange(rank, 2000, 2500)) return 'gold';
    if (isInRange(rank, 2500, 3000)) return 'platinum';
    if (isInRange(rank, 3000, 3500)) return 'diamond';
    if (isInRange(rank, 3500, 4000)) return 'master';
    if (isInRange(rank, 4000, 5000)) return 'gm';
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
