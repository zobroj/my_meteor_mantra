import PostSingle from '../components/post_single.jsx'
import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

export const composer = ( { context, postId }, onData ) => {

  const { Meteor, Collections, FlowRouter, LocalState } = context()
  const error = LocalState.get( 'POSTS_ERROR' )

  if ( Meteor.subscribe( 'posts.single', postId ).ready() ) {

    const post = Collections.Posts.findOne( postId )

    if ( post ) {
      onData( null, { post } )
    } else {

      LocalState.set( 'POSTS_ERROR', 'Post could not be found. Please try again.' )
      console.log('post not found')
      FlowRouter.go('/post/notFound')
      // FlowRouter.path('/posts', { error } )
    }
  }

  return LocalState.set( 'POSTS_ERROR', null )
}

export default composeAll(
  composeWithTracker( composer ),
  useDeps(),
)( PostSingle )
