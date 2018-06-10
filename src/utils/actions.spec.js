import { expect } from 'chai';

import { createActionsFor } from './actions';

describe('actions utilities', () => {
  describe('createActionsFor', () => {
    it('should create actions for the given entity name + list pair', () => {
      const name = 'race';
      const actionNamesList = ['START_YOUR_ENGINES', 'REFULE', 'PIT_STOP'];

      expect(createActionsFor(name, actionNamesList)).to.eql({
        START_YOUR_ENGINES: 'race:START_YOUR_ENGINES',
        REFULE            : 'race:REFULE',
        PIT_STOP          : 'race:PIT_STOP'
      });
    });
    it('should return an empty object when the actionNamesList is not an array', () => {
      const name = 'race';
      const actionNamesList = {
        start: 'START_YOUR_ENGINES'
      };

      expect(createActionsFor(name, actionNamesList)).to.eql({});
    });
  });
});
