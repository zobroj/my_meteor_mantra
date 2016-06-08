import { Posts, Comments } from '/lib/collections';

export default function () {

  // Create posts for testing
  if ( !Posts.findOne() ) {
    for ( let lc = 1; lc <= 5; lc++ ) {
      const title = `This is the post title ${ lc }`;
      const author = 'Bob'
      const content = `Post ${ lc }'s content is the bestest`;
      const createdAt = new Date();
      const postId = Meteor.uuid();
      Posts.insert( { _id: postId, title, author, content, createdAt } );

      // Generate comment linked to postId
      for ( let lc = 1; lc <= 3; lc++ ) {
        const author = 'Alice';
        const content = `This is a Comment! ${ lc }`;
        const createdAt = new Date();
        Comments.insert( { postId, author, content, createdAt } );
      }
    }
  }

}
