import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { authComposer } from '/client/configs/composers';
import Component from '../components/layout_split';

export default composeAll(
  composeWithTracker(authComposer),
  useDeps()
)(Component);
