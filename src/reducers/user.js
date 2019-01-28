import { SIGN_IN, SIGN_OUT } from './constants';

const INITIAL_USER_STATE = {
    userId: null,
    userName: ''
};

export default (state = INITIAL_USER_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};