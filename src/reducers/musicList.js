import {
    FETCH_MUSIC_LIST
} from './constants';

const INITIAL_MUSIC_LIST_STATE = [];

export default (state = INITIAL_MUSIC_LIST_STATE, action) => {
    switch(action.type) {
        case FETCH_MUSIC_LIST:
            return [ ...state, action.payload ];
        default:
            return state;
    }
};

