const {afterEach, beforeEach, describe, it} = global;
import {expect} from 'chai';
import sinon from 'sinon';
import actions from '../routes';

// compare_route is the route group to highlight in the navbar
// post.list, post.single will highlight the 'post' group
const COMPARE_ROUTE = 'post';
const CURRENT_ROUTE = 'post.list';
var FlowRouter;
var routeSpy;

describe('core.lib.helpers', () => {
  describe('isActiveRoute', () => {
    beforeEach(() => {
      FlowRouter = {getRouteName: sinon.stub()};
      routeSpy = sinon.spy(actions, 'isActiveRoute');
    });
    afterEach(() => {
      routeSpy.restore();
    });

    describe('if currentRoute is undefined', () => {
      it('should return null', () => {
        FlowRouter.getRouteName.returns(undefined);
        actions.isActiveRoute({FlowRouter}, COMPARE_ROUTE);
        expect(routeSpy.callCount).to.be.equal(1);
        expect(routeSpy.returnValues).to.be.deep.equal([ '' ]);
      });
    });

    describe('if currentRoute is defined', () => {
      it('should return "active"  if currentRoute matches', () => {
        FlowRouter.getRouteName.returns(CURRENT_ROUTE);
        actions.isActiveRoute({FlowRouter}, COMPARE_ROUTE);
        expect(routeSpy.callCount).to.be.equal(1);
        expect(routeSpy.returnValues).to.be.deep.equal([ 'active' ]);
      });
      it('should return null if currentRoute does not match', () => {
        FlowRouter.getRouteName.returns(CURRENT_ROUTE);
        actions.isActiveRoute({FlowRouter}, 'notmatching');
        expect(routeSpy.callCount).to.be.equal(1);
        expect(routeSpy.returnValues).to.be.deep.equal([ '' ]);
      });
    });
  });
});
