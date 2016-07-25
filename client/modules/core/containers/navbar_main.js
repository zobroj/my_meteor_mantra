import { useDeps, composeAll } from 'mantra-core';
import NavbarMain from '../components/navbar_main';

export const depsMapper = (context, actions) => ({
  logout: actions.accounts.logout,
  context: () => context,
});

export default composeAll(
  useDeps(depsMapper)
)(NavbarMain);
