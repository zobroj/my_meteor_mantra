import _ from 'lodash';

export function authComposer({ context }, onData) {
  const { Meteor } = context();

  function emailVerified() {
    return _.get(Meteor.user(), 'emails[0].verified', false);
  }

  /* TODO Investigate why collection subscription stopped working at commit
  00aa38554d183e402144716e08f4289e1e36bde6
  function userId() {
    if (Meteor.subscribe('users.current').ready()) {
      return Meteor.userId();
    }
    return null;
  }
  */

  const user = {
    id: Meteor.userId(),
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
