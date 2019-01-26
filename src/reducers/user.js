import { FETCH_USER } from './constants';

const INITIAL_USER_STATE = {
    userId: null,
    userName: ''
};

export default (state = INITIAL_USER_STATE, action) => {
    switch(action.type) {
        case FETCH_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};