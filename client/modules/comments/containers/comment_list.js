import { useDeps, composeWithTracker, composeAll } from 'mantra-core'
import Component from '../components/comment_list'

export const composer = ( { context, postId }, onData) => {

  const { Meteor, Collections } = context()
  const subscription = Meteor.subscribe( 'posts.comments', postId )

  if ( subscription.ready() ) {

    const options = { sort: { createdAt: -1 } }
    const comments = Collections.Comments.find( { postId }, options ).fetch()

    onData( null, { comments } )

  }
}

export default composeAll(
  composeWithTracker( composer ),
  useDeps(),
)( Component )
