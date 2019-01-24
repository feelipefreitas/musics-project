import { 
    createStore, 
    applyMiddleware
 } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [];

middlewares.push(thunk);

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

middlewares.push(loggerMiddleware);

export default createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));