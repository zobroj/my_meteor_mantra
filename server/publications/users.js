import { Meteor } from 'meteor/meteor';

export default function () {
  /* TODO make sure we're not publishing EVERYONES data */
  Meteor.publish('users.current', () => {
    return Meteor.users.find();
  });
  Meteor.publish('users.data', () => {
    return Meteor.users.find({}, {fields: {profile: 1}});
  });
}
