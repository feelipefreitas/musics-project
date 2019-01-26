import { combineReducers } from 'redux';
import user from './user';
import musicList from './musicList';
import musicSelected from './musicSelected';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    user,
    musicList,
    musicSelected,
    form: formReducer
});