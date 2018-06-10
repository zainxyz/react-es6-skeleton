import _isArray from 'lodash/isArray';
import constants from 'namespace-constants';

/**
 * Create actions for a specific entity
 *
 * @method createActionsFor
 * @param  {string}         entityName The name of the entity
 * @param  {Array}          list       The list of action names
 * @return {Object}                    A dictionary of actions
 */
export const createActionsFor = (entityName, list) => {
  const listCopy = _isArray(list) ? [...list] : [];

  return constants(entityName, listCopy);
};
