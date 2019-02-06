import {
    FETCH_MUSIC_LIST,
    FETCH_MUSIC_SELECTED,
    LIKE_MUSIC,
    DISLIKE_MUSIC,
    DELETE_MUSIC,
    ADD_MUSIC
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
    await musicsRequests.likeMusic(music);
    
    dispatch({
        type: LIKE_MUSIC,
        payload: music
    });
};

export const dislikeMusic = music => async dispatch => {
    await musicsRequests.likeMusic(music);

    dispatch({
        type: DISLIKE_MUSIC,
        payload: music
    });
};

export const deleteMusic = id => async dispatch => {
    await musicsRequests.deleteMusic(id);

    dispatch({
        type: DELETE_MUSIC,
        payload: id
    });
};

export const createMusic = music => async dispatch => {
    music.likes = 0;
    music.likers = [];
    
    const response = await musicsRequests.createMusic(music);
    
    dispatch({
        type: ADD_MUSIC,
        payload: response
    });
};