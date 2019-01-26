import {
    FETCH_MUSIC_SELECTED
} from './constants';

const INITIAL_MUSIC_SELECTED_STATE = {
    id: null,
    name: '',
    description: '',
    author: ''
};

export default (state = INITIAL_MUSIC_SELECTED_STATE, action) => {
    switch(action.type) {
        case FETCH_MUSIC_SELECTED: 
            return { ...state, ...action.payload }
        default:
            return state;
    }
};