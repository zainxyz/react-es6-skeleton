import _get from 'lodash/get';
import _isEqual from 'lodash/isEqual';
import createBrowserHistory from 'history/createBrowserHistory';
import storage from 'redux-persist/es/storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { routerMiddleware } from 'react-router-redux';

import { APP_PERSIST_ID } from 'constants/store';

import rootReducers from './reducers';

/**
 * The config for the redux persist
 *
 * @type {Object}
 */
const reduxPersistConfig = {
  blacklist: ['modals'],
  debug    : true,
  key      : APP_PERSIST_ID,
  storage
};

/**
 * Create the browser history
 *
 * @type {Object}
 */
const history = createBrowserHistory();

/**
 * Combine the main reducers with the redux-persist
 *
 * @type {Function}
 */
const reducers = persistCombineReducers(reduxPersistConfig, rootReducers);

/**
 * Configure the store for the application
 *
 * @method configureStore
 * @return {Object}       The store, history, and persistor
 */
const configureStore = () => {
  // Grab the current node environment
  const NODE_ENV = _get(process, 'env.NODE_ENV', 'development');
  // Build the redux-logger
  const logger = createLogger({
    // diff    : true, // turn on if you need to view the diff between store changes
    duration: true
  });
  // Build the middlewares for the store
  let middlewaresList = [routerMiddleware(history)];
  // If we're on the development environment then let's add the redux-logger
  if (_isEqual(NODE_ENV, 'development')) {
    // NOTE: redux-logger must be the last middleware in the list,
    // otherwise it will log all of the other middlewares + promises before it.
    // READ: https://github.com/evgenyrodionov/redux-logger/issues/20
    middlewaresList = [...middlewaresList, logger];
  }
  // Run the Redux DevTools Extension
  // NOTE: Usually you would only run the redux-devtools in 'development' environment,
  // but it's good to have it available if the extension is present.
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // Create the store
  const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewaresList)));
  // Create the redux-persist items
  const persistor = persistStore(store);
  // Return an object consisting of the store, the history, and the persistor.
  // This is the object return for redux-persist to bind correctly.
  return {
    history,
    persistor,
    store
  };
};

export default configureStore;
