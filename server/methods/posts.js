// server methods
import { Posts, Comments } from '/lib/collections'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

export default function () {
  Meteor.methods({
    'posts.create'( _id, userId, author, title, content ) {
      check( _id, String )
      check( userId, String )
      check( author, String )
      check( title, String )
      check( content, String )

      // Demo the latency compensation (Delete this in production)
      Meteor._sleepForMs(500)

      const createdAt = new Date()
      const post = {
        _id, userId, author, title, content, createdAt
      }

      Posts.insert( post )
    }
  })

  Meteor.methods({
    'posts.createComment'( _id, postId, author, content ) {
      check( _id, String )
      check( postId, String )
      check( author, String )
      check( content, String )

      // Demo the latency compensation (Delete this in production)
      Meteor._sleepForMs(500)

      // XXX: Do some user authentication
      const createdAt = new Date()
      const comment = { _id, postId, author, content, createdAt }
      Comments.insert( comment )
    }
  })
}
