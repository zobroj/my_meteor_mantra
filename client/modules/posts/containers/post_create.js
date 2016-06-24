import { useDeps, composeWithTracker, composeAll } from 'mantra-core'
import Component from '../components/post_create'

export const composer = ( { context, clearErrors }, onData ) => {

  const { LocalState } = context()
  const errorState = 'POSTS_CREATE_ERROR'
  const error = LocalState.get( errorState )

  onData( null, { error } )

  return clearErrors.bind( errorState )
}

export const depsMapper = ( context, actions ) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context,
})

export default composeAll(
  composeWithTracker( composer ),
  useDeps( depsMapper ),
)( Component )
