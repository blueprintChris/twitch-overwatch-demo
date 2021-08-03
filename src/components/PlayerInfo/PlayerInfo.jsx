import './PlayerInfo.css';
import React from 'react';

const PlayerInfo = props => {
  const { player } = props;
  return (
    <div className='player-wrapper'>
      <div className='player-image'>
        <img src={player.accounts[0].portrait} alt='' height='50' width='50' />
      </div>
      <div className='player-details'>
        <span>{player.accounts[0].name}</span>
        <span>Platform: {player.accounts[0].platform}</span>
      </div>
    </div>
  );
};

export default PlayerInfo;
