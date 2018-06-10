import { routerReducer } from 'react-router-redux';

// Due to the implementation of redux-persist, we need to export out an object,
// which contains all of the app's reducers, rather than a 'combineReducer' function.
// We'll apply the 'persistCombineReducers' in the './store.js' file.
export default {
  router: routerReducer
};
