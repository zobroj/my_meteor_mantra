// method_stub
import { check } from 'meteor/check'

export default function ( { Collections, Meteor }) {
  Meteor.methods({
    'posts.createComment'( _id, userId, author, postId, content ) {
      check( _id, String )
      check( userId, String )
      check( author, String )
      check( postId, String )
      check( content, String )

      const createdAt = new Date()
      const comment = {
        _id, userId, author, postId, content, createdAt,
        saving: true
      }

      Collections.Comments.insert( comment )
    }
  })
}
