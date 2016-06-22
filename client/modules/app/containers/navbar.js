import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import NavBar from '../components/navbar';

export const composer = ( {}, onData ) => {

  onData( null, {} );

}

export default composeAll(
  composeWithTracker( composer ),
  useDeps()
)( NavBar );
