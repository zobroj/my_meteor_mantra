import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_login';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const errorLogin = LocalState.get('LOGIN_ERROR');
  const errorReset = LocalState.get('RESET_PASSWORD_ERROR');

  onData(null, { errorLogin, errorReset });

  const cleanup = () => {
    clearErrors('LOGIN_ERROR');
    clearErrors('RESET_PASSWORD_ERROR');
  };

  return cleanup;
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions.accounts.clearErrors,
  login: actions.accounts.login,
  sendResetPasswordLink: actions.accounts.sendResetPasswordLink,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
