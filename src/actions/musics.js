import {
    FETCH_MUSIC_LIST,
    FETCH_MUSIC_SELECTED
} from '../reducers/constants';

import { musicsRequests } from '../agent';

export const fetchMusicList = () => async dispatch => {
    const response = await musicsRequests.getMusicList();

    dispatch({
        type: FETCH_MUSIC_LIST,
        payload: response
    });
};

export const fetchMusicSelected = music => {

};

export const likeMusic = music => async dispatch => {
    music.likes += 1;
    const response = await musicsRequests.likeMusic(music);

    console.log(response)
};