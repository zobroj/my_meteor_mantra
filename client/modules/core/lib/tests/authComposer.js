const {afterEach, beforeEach, describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import authComposer from '../authComposer';

describe('core.lib.authComposer', () => {
  const USER = {
    id: 'the-id',
    email: 'the-email',
    profile: 'the-profile',
    username: 'the-username',
  };
  const emailVerified = true;
  const loggedIn = true;
  const loggingIn = true;
  var Meteor; var context; var onData;
  beforeEach(() => {
    Meteor = {userId: spy(), subscribe: spy(), user: spy(), loggingIn: spy()};
    onData = () => spy();
    context = {Meteor};
  });

  it('should gather user information', () => {
    authComposer({context}, onData);
    // id
    // email
    // profile
    // username
  });

  it('should publish user user information to onData', () => {
    // emailVerified
    // loggedIn
    // loggingIn
    // user
  });

  describe('should subscribe to users.current', () => {
    describe('before subscribed', () => {
      it('should return null');
    });

    describe('after subscribed', () => {
      it('should return userId');
    });
  });
});
