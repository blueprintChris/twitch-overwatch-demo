import './App.css';
import oversmash from 'oversmash';
import { useState, useReducer } from 'react';
import Spinner from 'react-loader-spinner';
import playerReducer, { initialState, Actions } from './reducers/playerReducer';
import SearchInput from './components/SearchInput/SearchInput';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import PlayerRanks from './components/PlayerRanks/PlayerRanks';
import HeroStats from './components/HeroStats/HeroStats';

function App() {
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
    <div className='App'>
      <h1>Overwatch Stats Finder</h1>
      <SearchInput handleClick={handleClick} handleChange={handleChange} />
      {error && <span>{error.message}</span>}
      {isLoading && <Spinner type='Oval' color='#f99e1a' />}
      {player && <PlayerInfo player={player} />}
      {playerStats && (
        <>
          <PlayerRanks playerStats={playerStats} />
          <HeroStats playerStats={playerStats} />
        </>
      )}
    </div>
  );
}

export default App;
