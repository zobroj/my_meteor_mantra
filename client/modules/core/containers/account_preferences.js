import { useDeps, composeAll } from 'mantra-core';
import Component from '../components/account_preferences';

export const depsMapper = (context, actions) => ({
  deleteAccount: actions.accounts.deleteAccount,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
});

export default composeAll(
  useDeps(depsMapper)
)(Component);
