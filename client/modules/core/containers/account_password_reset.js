import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_password_reset';
import { authComposer } from '/client/configs/composers';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const errorState = 'RESET_PASSWORD_ERROR';
  const error = LocalState.get(errorState);

  onData(null, { error });

  return clearErrors.bind(errorState);
};

export const depsMapper = (context, actions) => ({
  resetPassword: actions.accounts.resetPassword,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(Component);
