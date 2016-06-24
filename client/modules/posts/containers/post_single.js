import PostSingle from '../components/post_single.jsx'
import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

export const composer = ( { context, postId }, onData ) => {

  const { Meteor, Collections } = context()
  const subscription = Meteor.subscribe( 'posts.single', postId )

  if ( subscription.ready() ) {

    const post = Collections.Posts.findOne( postId )
    
    onData( null, { post } )

  }
}

export default composeAll(
  composeWithTracker( composer ),
  useDeps(),
)( PostSingle )
