import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/post_create';

export const composer = ( { context, clearErrors }, onData ) => {
  const { LocalState } = context();
  const error = LocalState.get( 'POSTS_ERROR' );
  onData( null, { error } );

  return clearErrors;
};

export const depsMapper = ( context, actions ) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker( composer ),
  useDeps( depsMapper )
)( Component );
