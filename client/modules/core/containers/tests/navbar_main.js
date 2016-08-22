const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {depsMapper} from '../navbar_main';

describe('core.containers.navbar_main', () => {
  describe('depsMapper', () => {
    var actions;
    var context;
    var deps;
    beforeEach(() => {
      actions = {
        accounts: {logout: spy()},
        routes: {isActiveRoute: spy()}
      };
      context = spy();
      deps = depsMapper(context, actions);
    });

    describe('actions', () => {
      it('should map deps', () => {
        expect(deps.logout).to.be.equal(actions.accounts.logout);
        expect(deps.isActiveRoute).to.be.equal(actions.routes.isActiveRoute);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
