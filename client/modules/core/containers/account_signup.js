import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_signup';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const errorState = 'SIGNUP_ERROR';
  const error = LocalState.get(errorState);

  onData(null, { error });

  return clearErrors.bind(errorState);
};

export const depsMapper = (context, actions) => ({
  signup: actions.accounts.signup,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
