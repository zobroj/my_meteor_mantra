// _module_template example
import { Foobars } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'foobars.create'(_id, name) {
      check(_id, String);
      check(name, String);
      const createdAt = new Date();
      const foobar = { _id, name, createdAt };
      Foobars.insert(foobar);
    },
  });
}
