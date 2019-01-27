import React from 'react';

import { Route } from 'react-router-dom';

import Login from '../components/login';
import MusicList from '../components/musics/MusicList';
import MusicDetails from '../components/musics/MusicDetails';
import MusicCreate from '../components/musics/MusicCreate';

export default () => (
    <React.Fragment>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={MusicList} />
        <Route path="/music/list" exact component={MusicList} />
        <Route path="/music/create" exact component={MusicCreate} />
        <Route path="/music/details/:id" exact component={MusicDetails} />
    </React.Fragment>
);