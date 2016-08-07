// Foobars is _module_template example
import { Posts, Comments, Foobars } from '/lib/collections';

export default function () {
  // Create posts for testing
  if (!Posts.findOne()) {
    for (let a = 1; a <= 5; a++) {
      const title = `This is the post title ${a}`;
      let username = 'Bob';
      let text = `Post ${a}'s content is the bestest`;
      let createdAt = new Date();
      const postId = Meteor.uuid();
      Posts.insert({ _id: postId, title, username, text, createdAt });

      // Generate comment linked to postId
      for (let b = 1; b <= 3; b++) {
        username = 'Alice';
        text = `This is a Comment! ${b}`;
        createdAt = new Date();
        Comments.insert({ postId, username, text, createdAt });
      }
    }
  }

  // _module_template example
  if (!Foobars.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const name = `This is the test title ${lc}`;
      const createdAt = new Date();
      const foobarId = Meteor.uuid();
      Foobars.insert({ _id: foobarId, name, createdAt });
    }
  }
}
