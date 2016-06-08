import { check } from 'meteor/check';

export default function ( { Meteor, Collections } ) {
  Meteor.methods({
    'posts.create'( _id, author, title, content ) {
      check( _id, String );
      check( author, String );
      check( title, String );
      check( content, String );

      const createdAt = new Date();
      const post = {
        _id, author, title, content, createdAt,
        saving: true
      };

      Collections.Posts.insert( post );
    }
  });
}
