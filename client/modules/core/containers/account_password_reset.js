import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_password_reset';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('RESET_PASSWORD_ERROR');

  onData(null, { error });
  const cleanup = () => {
    clearErrors('RESET_PASSWORD_ERROR');
  };

  return cleanup;
};

export const depsMapper = (context, actions) => ({
  resetPassword: actions.accounts.resetPassword,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
