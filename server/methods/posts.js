// server methods
import { Posts, Comments } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'posts.create'(_id, userId, username, title, text) {
      check(_id, String);
      check(userId, String);
      check(username, String);
      check(title, String);
      check(text, String);

      // Demo the latency compensation (Delete this in production)
      Meteor._sleepForMs(500);

      const createdAt = new Date();
      const post = {
        _id, userId, username, title, text, createdAt,
      };

      Posts.insert(post);
    },
  });
  Meteor.methods({
    'posts.createComment'(_id, userId, username, postId, text) {
      check(_id, String);
      check(userId, String);
      check(username, String);
      check(postId, String);
      check(text, String);

      // Demo the latency compensation (Delete this in production)
      Meteor._sleepForMs(500);

      // XXX: Do some user authentication
      const createdAt = new Date();
      const comment = {
        _id, userId, username, postId, text, createdAt,
      };

      Comments.insert(comment);
    },
  });
}
