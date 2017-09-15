import constants from './constants';

const initialState = { songs: [], currentSong: '' };

export default function songViewReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_SONG:
            return Object.assign({}, state, { songs: [...state.songs, action.song] });
        case constants.CHANGE_SONG:
            return Object.assign({}, state, { currentSong: action.song });
        case constants.CLEAR_SONG:
            return Object.assign({}, state, { currentSong: '' });
        default:
            return state;
    }
}