import { combineReducers } from 'redux';
import user from './user';
import musics from './musics';

export default combineReducers({
    user,
    musics
});