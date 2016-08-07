// client
import { check } from 'meteor/check';

export default function ({ Meteor, Collections }) {
  Meteor.methods({
    'posts.create'(_id, userId, username, title, text) {
      check(_id, String);
      check(userId, String);
      check(username, String);
      check(title, String);
      check(text, String);

      const createdAt = new Date();
      const post = {
        _id, userId, username, title, text, createdAt,
        saving: true,
      };

      Collections.Posts.insert(post);
    },
  });
}
