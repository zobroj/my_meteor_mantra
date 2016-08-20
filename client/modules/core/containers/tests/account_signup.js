const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../account_signup';

describe('comments.containers.account_signup', () => {
  describe('composer', () => {
    describe('get LocalState', () => {
      var LocalState;
      var context;
      beforeEach(() => {
        LocalState = {get: spy()};
        context = () => ({LocalState});
        composer({context}, spy());
      });

      it('should get SIGNUP_ERROR from local state', () => {
        const args = LocalState.get.args[0];
        expect(args).to.have.length(1);
        expect(args[0]).to.be.equal('SIGNUP_ERROR');
      });
    });

    it('should call onData with null and "errors"', () => {
      const LocalState = {get: stub().returns('error')};
      const context = () => ({LocalState});
      const onData = spy();
      composer({context}, onData);
      const args = onData.args[0];
      expect(args[0]).to.be.equal(null);
      expect(args[1]).to.be.deep.equal({error: 'error'});
    });

    it('should return cleanup func', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});
      const clearErrors = spy();

      const clearFunc = composer({context, clearErrors}, spy());
      expect(clearFunc.name).to.be.deep.equal('cleanup');
    });
  });

  describe('depsMapper', () => {
    var actions;
    var context;
    var deps;
    beforeEach(() => {
      actions = {accounts: {
        clearErrors: spy(), signup: spy()
      }};
      context = spy();
      deps = depsMapper(context, actions);
    });

    describe('actions', () => {
      it('should map deps', () => {
        expect(deps.clearErrors).to.be.equal(actions.accounts.clearErrors);
        expect(deps.signup).to.be.equal(actions.accounts.signup);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
