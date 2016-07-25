import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { authComposer } from '/client/configs/composers';
import Component from '../components/app_verified_msg';

export const depsMapper = (context, actions) => ({
  resendVerificationEmail: actions.accounts.resendVerificationEmail,
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(Component);
