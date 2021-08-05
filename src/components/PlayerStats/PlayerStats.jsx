import React from 'react';
import HeroStats from '../HeroStats/HeroStats';
import PlayerRanks from '../PlayerRanks/PlayerRanks';

const PlayerStats = props => {
  const { playerStats } = props;
  return (
    <>
      <PlayerRanks playerStats={playerStats} />
      <HeroStats playerStats={playerStats} />
    </>
  );
};

export default PlayerStats;
