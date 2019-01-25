import { combineReducers } from 'redux';
import user from './user';
import musics from './musics';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    user,
    musics,
    form: formReducer
});