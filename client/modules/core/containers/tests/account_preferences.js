const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {depsMapper} from '../account_preferences';

describe('comments.containers.account_preferences', () => {
  describe('depsMapper', () => {
    var actions;
    var context;
    var deps;
    beforeEach(() => {
      actions = {accounts: {
        clearErrors: spy(), deleteAccount: spy()
      }};
      context = spy();
      deps = depsMapper(context, actions);
    });

    describe('actions', () => {
      it('should map deps', () => {
        expect(deps.clearErrors).to.be.equal(actions.accounts.clearErrors);
        expect(deps.deleteAccount).to.be.equal(actions.accounts.deleteAccount);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
