import _ from 'lodash';

export function authComposer({ context }, onData) {
  const { Meteor } = context();

  function emailVerified() {
    return _.get(Meteor.user(), 'emails[0].verified', false);
  }

  /* TODO Ensure that all user information isn't being published.
  http://www.colbycheeze.com/blog/2015/06/publishing-user-data.html
  */
  function userId() {
    if (Meteor.subscribe('users.current').ready()) {
      return Meteor.userId();
    }
    return null;
  }

  const user = {
    id: userId(),
    email: _.get(Meteor.user(), 'emails[0].address', null),
    profile: _.get(Meteor.user(), 'profile', null),
    username: _.get(Meteor.user(), 'username', null),
  };

  onData(null, {
    emailVerified: emailVerified(),
    loggedIn: Boolean(Meteor.userId()),
    loggingIn: Meteor.loggingIn(),
    user,
  });
}
