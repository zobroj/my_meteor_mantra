import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import { authComposer } from '/client/configs/composers';
import NavbarMain from '../components/navbar_main';

export const depsMapper = (context, actions) => ({
  logout: actions.accounts.logout,
  isActiveRoute: actions.routing.isActiveRoute,
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(NavbarMain);
