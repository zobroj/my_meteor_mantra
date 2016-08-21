import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { authComposer } from '/client/configs/composers';
import Component from '../components/post_create';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('POSTS_CREATE_ERROR');

  onData(null, { error });

  const cleanup = () => {
    clearErrors('POSTS_CREATE_ERROR');
  };
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(authComposer),
  useDeps(depsMapper)
)(Component);
