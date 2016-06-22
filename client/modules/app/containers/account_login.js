import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_login';
import { authComposer } from 'meteor-auth';

export const composer = ( { context, clearLoginErrors }, onData ) => {
  const { LocalState } = context();
  const error = LocalState.get( 'LOGIN_ERROR' );
  onData( null, { error } );

  return clearLoginErrors;
};

export const depsMapper = ( context, actions ) => ({
  login: actions.accounts.login,
  clearLoginErrors: actions.accounts.clearLoginErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker( composer ),
  composeWithTracker( authComposer ),
  useDeps( depsMapper ),
)( Component );
