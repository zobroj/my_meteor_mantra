import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import { authComposer } from '/client/configs/composers';
import AuthEnsureGuest from '../components/auth_ensure_guest';

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(AuthEnsureGuest);
