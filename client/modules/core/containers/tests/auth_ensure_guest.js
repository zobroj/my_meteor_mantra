const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {depsMapper} from '../auth_ensure_guest';

describe('core.containers.auth_ensure_guest', () => {
  describe('depsMapper', () => {
    var actions;
    var context;
    var deps;
    beforeEach(() => {
      context = spy();
      deps = depsMapper(context, actions);
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
