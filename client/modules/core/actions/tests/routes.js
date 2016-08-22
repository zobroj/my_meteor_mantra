/*
const {afterEach, beforeEach, describe, it} = global;
import {expect} from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

// import {helpersTest} from '../helpers';

const FlowRouter = {getRouteName: sinon.stub()};
const {helpersTest} = proxyquire('../helpers', {
  'meteor/kadira:flow-router': {FlowRouter, '@noCallThru': true},
});

describe('core.lib.helpers', () => {
  describe('isActiveRoute', () => {
    const COMPARE_ROUTE = 'Posts';
    const CURRENT_ROUTE = 'Posts';
    var routeSpy;
    beforeEach(() => {
      routeSpy = sinon.spy(helpersTest, 'isActiveRoute');
    });
    afterEach(() => {
      routeSpy.restore();
    });

    describe('if currentRoute is undefined', () => {
      it('should return null', () => {
        FlowRouter.getRouteName.returns(undefined);
        routeSpy(COMPARE_ROUTE);
        console.log(routeSpy.callCount);
        // expect(routeSpy.callCount).to.be.equal(1);
      });
    });

    describe('if currentRoute is defined', () => {
      it('should return "active"  if currentRoute matches');
      it('should return null if currentRoute does not match');
    });
  });
});

*/
