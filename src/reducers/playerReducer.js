export const initialState = {
  username: '',
  error: null,
  player: null,
  playerStats: null,
  isLoading: false,
};

export const Actions = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const playerReducer = (state, action) => {
  switch (action.type) {
    case Actions.LOADING:
      return {
        ...initialState,
        isLoading: true,
      };

    case Actions.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    case Actions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        player: action.payload.player,
        playerStats: action.payload.playerStats,
      };

    default:
      console.log('default case!');
  }
};

export default playerReducer;
