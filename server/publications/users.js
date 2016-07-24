import { Meteor } from 'meteor/meteor';

export default function () {
  Meteor.publish('users.current', () => (
    Meteor.users.find(this.userId)
  ));
}
