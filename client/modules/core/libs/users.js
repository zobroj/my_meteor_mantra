import _ from 'lodash';

export default function Users() {
  const userSubReady = Meteor.subscribe('users.current').ready();
  const userId = Meteor.userId() || null;
  const user = Meteor.user();
  const username = _.get(Meteor.user(), 'username', null);
  const profile = _.get(Meteor.user(), 'profile', null);
  const email = _.get(Meteor.user(), 'emails[0].address', null);
  const emailVerified = _.get(Meteor.user(), 'emails[0].verified', null);
  return { userSubReady, userId, user, username, profile, email, emailVerified };
}
