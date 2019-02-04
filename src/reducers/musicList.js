import {
    FETCH_MUSIC_LIST,
    LIKE_MUSIC,
    DISLIKE_MUSIC,
    DELETE_MUSIC
} from './constants';

const INITIAL_MUSIC_LIST_STATE = [];

export default (state = INITIAL_MUSIC_LIST_STATE, action) => {
    switch(action.type) {
        case FETCH_MUSIC_LIST:
            return [ ...state, ...action.payload ];
        case LIKE_MUSIC:
        case DISLIKE_MUSIC:
            return state.map(music => {
                if(music.id === action.payload.id) {
                    music.likes = action.payload.likes;  
                    music.likers = action.payload.likers;   
                }
                return music;
            });
        case DELETE_MUSIC:
            return state.filter(music => music.id !== action.payload);
        default:
            return state;
    }
};

