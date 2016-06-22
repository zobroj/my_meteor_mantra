import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_register';
// import { authComposer } from 'meteor-auth';

export const composer = ( { context, clearErrors }, onData ) => {
  const { LocalState } = context();
  const error = LocalState.get( 'REGISTER_ERROR' );
  onData( null, { error } );

  return clearErrors;
};

export const depsMapper = ( context, actions ) => ({
  register: actions.accounts.register,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker( composer ),
  useDeps( depsMapper ),
)( Component );
