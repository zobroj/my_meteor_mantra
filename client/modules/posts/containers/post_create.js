import { useDeps, composeWithTracker, composeAll } from 'mantra-core'
import Component from '../components/post_create'

export const composer = ( { context, clearErrors }, onData ) => {

  const { LocalState } = context()
  const errorState = 'POSTS_CREATE_ERROR'
  const error = LocalState.get( errorState )

  onData( null, { error } )

  return clearErrors.bind( errorState )
<<<<<<< 5e0ce2d0b91e9c47e84dfe849c9594f6d95c5ad8
}
>>>>>>> refactor to remove birdy droppings

export const depsMapper = ( context, actions ) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context,
<<<<<<< 5e0ce2d0b91e9c47e84dfe849c9594f6d95c5ad8
})
>>>>>>> refactor to remove birdy droppings

export default composeAll(
  composeWithTracker( composer ),
  useDeps( depsMapper ),
)( Component )
