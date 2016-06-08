export default function ( { Collections, Meteor }) {
  Meteor.methods({
    'posts.createComment'( _id, postId, author, content ) {
      const saving = true;
      const createdAt = new Date();
      const comment = { _id, postId, author, content, createdAt, saving };
      Collections.Comments.insert( comment );
    }
  });
}
