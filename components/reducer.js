export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // set null after completion
  token: null,
  currentPlayingSong : null
};

const reducer = (state, action) => {

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentPlayingSong : action.currentPlayingSong
      }
    case "SET_PLAYING":
      return {
        ...state,
        playing : action.playing
      }
    default:
      return state;
  }
};

export default reducer;
