import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_signup';

export const composer = ({ context, clearErrorsSignup }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('SIGNUP_ERROR');

  onData(null, { error });

  return clearErrorsSignup;
};

export const depsMapper = (context, actions) => ({
  signup: actions.accounts.signup,
  clearErrorsSignup: actions.accounts.clearErrorsSignup,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
