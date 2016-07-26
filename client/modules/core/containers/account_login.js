import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_login';
import { authComposer } from '/client/configs/composers';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const errorReset = LocalState.get('RESET_PASSWORD_ERROR');
  const errorLogin = LocalState.get('LOGIN_ERROR');

  onData(null, { errorLogin, errorReset });

  clearErrors.bind(errorLogin);
  clearErrors.bind(errorReset);
  // return clearErrors.bind( errorState )
};

export const depsMapper = (context, actions) => ({
  login: actions.accounts.login,
  sendResetPasswordLink: actions.accounts.sendResetPasswordLink,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(Component);
