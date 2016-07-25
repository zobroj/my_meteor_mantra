import { useDeps, composeAll } from 'mantra-core';
import Component from '../components/app_verified_msg';

export const depsMapper = (context, actions) => ({
  resendVerificationEmail: actions.accounts.resendVerificationEmail,
  context: () => context,
});

export default composeAll(
  useDeps(depsMapper)
)(Component);
