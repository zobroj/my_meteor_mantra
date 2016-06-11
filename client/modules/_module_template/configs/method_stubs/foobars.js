import { check } from 'meteor/check';

// client-side method, overidden by /server/methods
export default function ( { Meteor, Collections } ) {
  Meteor.methods({
    'foobars.create'( _id, name ) {
      check( _id, String );
      check( name, String );

      const createdAt = new Date();
      const foobar = {
        _id, name, createdAt,
        saving: true
      };

      Collections.Foobars.insert( foobar );
    }
  });
}
