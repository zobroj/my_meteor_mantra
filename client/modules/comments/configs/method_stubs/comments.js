// method_stub
import { check } from 'meteor/check';

export default function ({ Collections, Meteor }) {
  Meteor.methods({
    'posts.createComment'(_id, userId, username, postId, text) {
      check(_id, String);
      check(userId, String);
      check(username, String);
      check(postId, String);
      check(text, String);

      const createdAt = new Date();
      const comment = {
        _id, userId, username, postId, text, createdAt,
        saving: true,
      };

      Collections.Comments.insert(comment);
    },
  });
}
