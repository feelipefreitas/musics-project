import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import 'typeface-roboto';

import AppRouter from './router';

import { Provider } from 'react-redux';
import store from './store';

import GloblaStyles from './styles';

ReactDOM.render(
    <HashRouter>
        <React.Fragment>
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <GloblaStyles />
                    <AppRouter />
                </MuiThemeProvider>
            </Provider>
        </React.Fragment>
    </HashRouter>
, document.querySelector('#root')
);