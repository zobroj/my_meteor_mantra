import FoobarList from '../components/foobar_list.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ( { context }, onData ) => {
  const { Meteor, Collections } = context();

  if ( Meteor.subscribe( 'foobars.list' ).ready() ) {

    const options = {
      sort: { createdAt: -1 }
    };

    const posts = Collections.Foobars.find( {}, options ).fetch();

    onData( null, { foobars } );

  } else {

    onData();

  }

};

export default composeAll(
  composeWithTracker( composer ),
  useDeps()
)( FoobarList );
