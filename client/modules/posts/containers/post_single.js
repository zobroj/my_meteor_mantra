import PostSingle from '../components/post_single.jsx'
import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

export const composer = ( { context, postId }, onData ) => {

  const { Meteor, Collections, FlowRouter } = context()

  if ( Meteor.subscribe( 'posts.single', postId ).ready() ) {

    const post = Collections.Posts.findOne( postId )
    onData( null, { post } )

  } else {

    const post = Collections.Posts.findOne( postId )

    if ( post ) {
      onData( null, { post } )
    } else {
      onData()
      console.log('post not found')
      FlowRouter.go('/post/notfound')
    }
  }
}

export default composeAll(
  composeWithTracker( composer ),
  useDeps()
)( PostSingle )
