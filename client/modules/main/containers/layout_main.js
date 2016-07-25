import { composeWithTracker, composeAll, useDeps } from 'mantra-core';
import { authComposer } from '/client/configs/composers';
import Component from '../components/layout_main';

export default composeAll(
  composeWithTracker(authComposer),
  useDeps()
)(Component);
