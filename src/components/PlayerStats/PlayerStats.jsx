import React from 'react';
import HeroStats from '../HeroStats/HeroStats';
import PlayerRanks from '../PlayerRanks/PlayerRanks';
import './PlayerStats.css';

const PlayerStats = props => {
  const { playerStats, isComp } = props;
  return (
    <>
      {isComp && <PlayerRanks playerStats={playerStats} />}
      <HeroStats playerStats={playerStats} isComp={isComp} />
    </>
  );
};

export default PlayerStats;
