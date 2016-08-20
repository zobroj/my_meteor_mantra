import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/account_signup';

export const composer = ({context, clearErrors}, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('SIGNUP_ERROR');

  onData(null, { error });

  const cleanup = () => {
    clearErrors('SIGNUP_ERROR');
  };

  return cleanup;
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
