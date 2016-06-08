import PostList from '../components/post_list.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ( { context }, onData ) => {
  const { Meteor, Collections } = context();

  if ( Meteor.subscribe( 'posts.list' ).ready() ) {
    const options = {
      sort: { createdAt: -1 }
    };
    const posts = Collections.Posts.find( {}, options ).fetch();
    onData( null, { posts } );
  } else {
    onData();
  }

};

export default composeAll(
  composeWithTracker( composer ),
  useDeps()
)( PostList );
