import _ from 'lodash';
import { Meteor } from 'meteor/meteor';

export default class User {
  // constructor() {
  //   this.email = null; // user's email objec
  //   this.emailVerified = null; // is user email verified (bool)
  //   this.loggedIn = null; // is user logged in (bool)
  //   this.profile = null; // user's profile object
  //   this.userId = null; // user's id
  //   this.username = null; // user's username
  // }
  userSubReady() {
    return Meteor.subscribe('users.current').ready();
  }
  error(message) {
    console.log(`USER_ACCOUNTS_ERROR: ${message}`);
  }
  get userId() {
    if (this.userSubReady()) {
      return Meteor.userId() || null;
    }
    return null;
  }
  get user() {
    if (this.userSubReady()) {
      return Meteor.user();
    }
    console.log('user' + this.user);
    return false;
  }
  get username() {
    if (this.userSubReady()) {
      return _.get(Meteor.user(), 'username', null);
    }
    return this.error('username');
  }
  get profile() {
    if (this.userSubReady()) {
      return _.get(Meteor.user(), 'profile', null);
    }
    return this.error('profile');
  }
  get email() {
    if (this.userSubReady()) {
      return _.get(Meteor.user(), 'emails[0].address', null);
    }
    return this.error('email');
  }
  get emailVerified() {
    return _.get(Meteor.user(), 'emails[0].verified', false);
  }
}
