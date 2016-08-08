import { composeAll, composeWithTracker } from 'mantra-core';
import { authComposer } from '/client/configs/composers';
import AuthCheck from '../components/auth_check';

export default composeAll(
  composeWithTracker(authComposer)
)(AuthCheck);
