import MainPage from '../components/main_page.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ( { context }, onData ) => {
  const { Meteor, Collections } = context();

  onData( null, {} );

};

export default composeAll(
  composeWithTracker( composer ),
  useDeps()
)( MainPage );
