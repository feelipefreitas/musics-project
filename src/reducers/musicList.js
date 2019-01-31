import {
    FETCH_MUSIC_LIST,
    LIKE_MUSIC
} from './constants';

const INITIAL_MUSIC_LIST_STATE = [];

export default (state = INITIAL_MUSIC_LIST_STATE, action) => {
    switch(action.type) {
        case FETCH_MUSIC_LIST:
            return [ ...state, ...action.payload ];
        case LIKE_MUSIC:
            return state.map(music => {
                if(music.id === action.payload.id) music.likes = action.payload.likes;
                return music;
            });
        default:
            return state;
    }
};

