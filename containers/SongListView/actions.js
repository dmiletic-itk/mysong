import constants from './constants';

export function addSong(song) {
    return {
        type: constants.ADD_SONG,
        song,
    };
}

export function changeCurrentSong(song) {
    return {
        type: constants.CHANGE_SONG,
        song,
    };
}

export function clearCurrentSong() {
    return {
        type: constants.CLEAR_SONG
    };
}