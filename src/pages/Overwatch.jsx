import React, { useState, useReducer } from 'react';
import oversmash from 'oversmash';
import playerReducer, { initialState, Actions } from '../reducers/playerReducer';
import SearchInput from '../components/SearchInput/SearchInput';
import PlayerInfo from '../components/PlayerInfo/PlayerInfo';
import Header from '../components/Header/Header';
import PlayerStats from '../components/PlayerStats/PlayerStats';
import Alert from '../components/Alert/Alert';

const Overwatch = () => {
  const [{ player, playerStats, error, isLoading }, dispatch] = useReducer(playerReducer, initialState);
  const [username, setUsername] = useState('');

  const handleOverwatchFetch = async () => {
    dispatch({ type: Actions.LOADING });
    try {
      const ow = oversmash();
      const playerResponse = await ow.player(username);
      const { name } = playerResponse.accounts[0];
      const playerStatsResponse = await ow.playerStats(name, 'pc');

      dispatch({ type: Actions.SUCCESS, payload: { player: playerResponse, playerStats: playerStatsResponse } });
    } catch (err) {
      dispatch({ type: Actions.ERROR, payload: { error: err } });
    }
  };

  const handleClick = () => {
    handleOverwatchFetch();
  };

  const handleChange = e => {
    const input = e.target.value;

    setUsername(input);
  };

  return (
    <>
      <Header text='Overwatch Stats Finder' priority='1' />
      <SearchInput
        handleClick={handleClick}
        handleChange={handleChange}
        isLoading={isLoading}
        btnText='Flex'
        placeholder='Search for a player, i.e. bob#12345'
      />
      {error && <Alert text={error.message} />}
      {player && <PlayerInfo player={player} />}
      {playerStats && <PlayerStats playerStats={playerStats} />}
    </>
  );
};

export default Overwatch;
