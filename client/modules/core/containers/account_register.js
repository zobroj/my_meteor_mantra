import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_register';
import { authComposer } from 'meteor-auth';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const errorState = 'REGISTER_ERROR';
  const error = LocalState.get(errorState);

  onData(null, { error });

  return clearErrors.bind(errorState);
};

export const depsMapper = (context, actions) => ({
  register: actions.accounts.register,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(Component);
