// client
import { check } from 'meteor/check';

export default function ( { Meteor, Collections } ) {
  Meteor.methods({
    'posts.create'( _id, userId, title, content ) {
      check( _id, String );
      check( userId, String );
      check( title, String );
      check( content, String );

      const createdAt = new Date();
      const post = {
        _id, userId, title, content, createdAt,
        saving: true
      };

      Collections.Posts.insert( post );
    }
  });
}
