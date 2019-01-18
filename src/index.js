import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import MusicList from './components/musics/MusicList';
import MusicDetails from './components/musics/MusicDetails';
import MusicCreate from './components/musics/MusicCreate';

ReactDOM.render(
    <HashRouter>
        <React.Fragment>
            <Route path="/" exact component={Login} />
            <Route path="/music/list" exact component={MusicList} />
            <Route path="/music/details/:id" exact component={MusicDetails} />
            <Route path="/music/create" exact component={MusicCreate} />
        </React.Fragment>
    </HashRouter>
, document.querySelector('#root')
);