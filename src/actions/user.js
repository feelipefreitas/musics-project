import {
    SIGN_IN,
    SIGN_OUT
} from '../reducers/constants';

import { userRequests } from '../agent'; 

export const signIn = user => async dispatch => {
    const response = await userRequests.login(user);

    if(response) {
        const { id : userId, userName } = response;
    
        dispatch({ type: SIGN_IN, payload: { userId, userName} });

        return true;
    }

    return false;

};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};