import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import Component from '../components/account_preferences';
import { authComposer } from '/client/configs/composers';

export const depsMapper = (context, actions) => ({
  deleteAccount: actions.accounts.deleteAccount,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(Component);
