import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import { authComposer } from '/client/configs/composers';
import AuthEnsureUser from '../components/auth_ensure_user';

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(AuthEnsureUser);
