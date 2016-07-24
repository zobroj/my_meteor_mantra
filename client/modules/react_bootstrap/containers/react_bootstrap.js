import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/react_bootstrap.jsx';
import { authComposer } from 'meteor-auth';

export const composer = ({ context }, onData) => {
  onData(null, { });
};

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(authComposer),
  useDeps()
)(Component);
