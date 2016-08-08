import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import { authComposer } from '/client/configs/composers';
import NavbarUser from '../components/navbar_user';

export const depsMapper = (context, actions) => ({
  logout: actions.accounts.logout,
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(NavbarUser);
