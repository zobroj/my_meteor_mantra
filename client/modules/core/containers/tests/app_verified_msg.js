const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {depsMapper} from '../app_verified_msg';

describe('core.containers.app_verified_msg', () => {
  describe('depsMapper', () => {
    var actions;
    var context;
    var deps;
    beforeEach(() => {
      actions = {accounts: { resendVerificationEmail: spy() }};
      context = spy();
      deps = depsMapper(context, actions);
    });

    describe('actions', () => {
      it('should map deps', () => {
        expect(deps.resendVerificationEmail)
          .to.be.equal(actions.accounts.resendVerificationEmail);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
