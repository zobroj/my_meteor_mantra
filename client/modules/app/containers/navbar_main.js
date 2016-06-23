import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { authComposer } from 'meteor-auth';
import NavbarMain from '../components/navbar_main';

export const composer = ( { context }, onData ) => {

  const { LocalState, authCommon } = context();
  const { email } = authCommon();

  onData( null, { email } );

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
