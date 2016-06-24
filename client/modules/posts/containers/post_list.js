import PostList from '../components/post_list.jsx'
import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

export const composer = ( { context }, onData ) => {

  const { Meteor, Collections } = context()
  const subscription = Meteor.subscribe( 'posts.list' )

  if ( subscription.ready() ) {
    
    const options = {
      sort: { createdAt: -1 }
    }
    const posts = Collections.Posts.find( {}, options ).fetch();

    onData( null, { posts } )

  }
}

export default composeAll(
  composeWithTracker( composer ),
  useDeps()
)( PostList )
