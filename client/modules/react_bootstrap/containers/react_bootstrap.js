import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/react_bootstrap';
import { authComposer } from '/client/configs/composers';

export default composeAll(
  composeWithTracker(authComposer),
  useDeps()
)(Component);
