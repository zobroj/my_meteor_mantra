// _module_template example
import { Foobars } from '/lib/collections';
import { Meteor } from 'meteor/meteor';

export default function () {
  Meteor.publish('foobars.list', () => {
    const selector = { category: { $ne: 'private' } };
    const options = {
      fields: { _id: 1, name: 1, createdAt: 1 },
      sort: { createdAt: -1 },
      limit: 3,
    };
    return Foobars.find(selector, options);
  });
}
