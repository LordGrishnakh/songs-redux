import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    {
      title: "If I Should Die",
      duration: "9:08",
    },
    {
      title: "I Want it That Way",
      duration: "2:37",
    },
    {
      title: "All Star",
      duration: "3:15",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SELECT_SONG':
      return action.payload
  
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});