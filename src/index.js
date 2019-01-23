import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import 'typeface-roboto';

import AppRouter from './router';

import GloblaStyles from './styles';

ReactDOM.render(
    <HashRouter>
        <React.Fragment>
            <MuiThemeProvider theme={theme}>
                <GloblaStyles />
                <AppRouter />
            </MuiThemeProvider>
        </React.Fragment>
    </HashRouter>
, document.querySelector('#root')
);