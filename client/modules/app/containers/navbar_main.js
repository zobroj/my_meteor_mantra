import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { authComposer } from 'meteor-auth';
import NavbarMain from '../components/navbar_main';

export const composer = ( {}, onData ) => {

  onData( null, {} );

};

export const depsMapper = ( context, actions ) => ({
  logout: actions.accounts.logout,
  context: () => context,
});

export default composeAll(
  composeWithTracker( composer ),
  composeWithTracker( authComposer ),
  useDeps( depsMapper ),
)( NavbarMain );
