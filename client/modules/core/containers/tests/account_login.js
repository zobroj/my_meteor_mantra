const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../account_login';

describe('comments.containers.account_login', () => {
  describe('composer', () => {
    describe('get LocalState', () => {
      var LocalState;
      var context;
      beforeEach(() => {
        LocalState = {get: spy()};
        context = () => ({LocalState});
        composer({context}, spy());
      });

      it('should get LOGIN_ERROR from local state', () => {
        const args = LocalState.get.args[0];
        expect(args).to.have.length(1);
        expect(args[0]).to.be.equal('LOGIN_ERROR');
      });

      it('should get RESET_PASSWORD_ERROR from local state', () => {
        const args = LocalState.get.args[1];
        expect(args).to.have.length(1);
        expect(args[0]).to.be.equal('RESET_PASSWORD_ERROR');
      });

    });

    it('should call onData with null and "errors"', () => {
      const LocalState = {get: stub().returns('error')};
      const context = () => ({LocalState});
      const onData = spy();
      composer({context}, onData);
      const args = onData.args[0];
      expect(args[0]).to.be.equal(null);
      expect(args[1]).to.be.deep.equal({
        errorLogin: 'error', errorReset: 'error'
      });
    });

    // it('should return clearErrors', () => {
    //   const LocalState = {get: spy()};
    //   const context = () => ({LocalState});
    //   const clearErrors = spy();
    //
    //   const clearFunc = composer({context, clearErrors}, spy());
    //
    //   expect(clearFunc).to.be.equal(clearErrors);
    // });
  });

  // describe('depsMapper', () => {
  //   var actions;
  //   var context;
  //   var deps;
  //   beforeEach(() => {
  //     actions = {comments: {create: spy(), clearErrors: spy()}};
  //     context = spy();
  //     deps = depsMapper(context, actions);
  //   });
  //
  //   describe('actions', () => {
  //     it('should map deps', () => {
  //       expect(deps.create, 'create').to.be.equal(actions.comments.create);
  //       expect(deps.clearErrors, 'clearErrors').to.be.equal(actions.comments.clearErrors);
  //     });
  //   });
  //
  //   describe('context', () => {
  //     it('should map the whole context as a function', () => {
  //       expect(deps.context()).to.be.equal(context);
  //     });
  //   });
  // });
});
