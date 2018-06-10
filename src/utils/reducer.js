import _get from 'lodash/get';

/**
 * A HOF that builds the reducers based on a passed in initialState and a directory of handlers.
 *
 * NOTE: Reason behind this HOF is to optimize the reducer functionality by switching to
 * a hash-map dictionary rather than a switch or if-else statements.
 *
 * @method buildReducer
 * @param  {Any}        initialState The initial state for the reducer
 * @param  {Object}     handlers     The directory of handlers for the actions
 * @return {Function}                The Redux's reducer function, which takes in a state and action
 */
export const buildReducer = (initialState, handlers) => (state = initialState, action = {}) => {
  const handler = _get(handlers, action.type);
  return handler ? handler(state, action) : state;
};
