const {afterEach, beforeEach, describe, it} = global;
import {expect} from 'chai';
import sinon from 'sinon';
import {authComposer} from '../authComposer';

describe('core.lib.authComposer', () => {
  const MONGOUSER = {
    _id: 'the-id',
    profile: 'the-profile',
    username: 'the-username',
    emails: [
      {
        address: 'test.email@gmail.com',
        verified: true
      }
    ]
  };
  const AUTHUSER = {
    email: MONGOUSER.emails[0].address,
    profile: MONGOUSER.profile,
    username: MONGOUSER.username,
  };
  const emailVerified = true;
  const loggedIn = true;
  const loggingIn = true;
  var Meteor; var context; var onData; var sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    Meteor = {
      userId: sandbox.stub(), subscribe: sandbox.stub(),
      user: sandbox.stub(), loggingIn: sandbox.stub()
    };
    onData = sandbox.spy();
    context = () => ({Meteor});
  });
  afterEach(() => {
    sandbox.restore();
  });

  describe('should subscribe to users.current', () => {
    describe('before subscribed', () => {
      it('should return null for userId', () => {
        Meteor.subscribe.returns({ready: () => false});
        Meteor.userId.returns(MONGOUSER._id);
        Meteor.user.returns(MONGOUSER);
        Meteor.loggingIn.returns(loggingIn);
        AUTHUSER.id = null;

        authComposer({context}, onData);
        const methodArgs = onData.args[0];
        expect(methodArgs.slice(1,2)).to.deep.equal([
          {emailVerified, loggedIn, loggingIn, user: AUTHUSER}
        ]);
      });
    });

    describe('after subscribed', () => {
      it('should return userId', () => {
        Meteor.subscribe.returns({ready: () => true});
        Meteor.userId.returns(MONGOUSER._id);
        Meteor.user.returns(MONGOUSER);
        Meteor.loggingIn.returns(loggingIn);
        AUTHUSER.id = MONGOUSER._id;

        authComposer({context}, onData);
        const methodArgs = onData.args[0];
        expect(methodArgs.slice(0,1)).to.deep.equal([ null ]);
        expect(methodArgs.slice(1,2)).to.deep.equal([
          {emailVerified, loggedIn, loggingIn, user: AUTHUSER}
        ]);
      });
    });
  });
});
