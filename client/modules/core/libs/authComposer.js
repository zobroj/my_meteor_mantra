import _ from 'lodash';

export function authComposer({ context }, onData) {
  const { Meteor } = context();

  function emailVerified() {
    return _.get(Meteor.user(), 'emails[0].verified', false);
  }

  function userId() {
    if (Meteor.subscribe('users.current').ready()) {
      return Meteor.userId();
    }
    return null;
  }

  onData(null, {
    userId: userId(),
    loggedIn: Boolean(Meteor.userId()),
    loggingIn: Meteor.loggingIn(),
    username: _.get(Meteor.user(), 'username', null),
    profile: _.get(Meteor.user(), 'profile', null),
    email: _.get(Meteor.user(), 'emails[0].address', null),
    emailVerified: emailVerified(),
  });
}
