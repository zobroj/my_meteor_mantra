import { useDeps, composeWithTracker, composeAll } from 'mantra-core'
import Component from '../components/account_login'
import { authComposer } from 'meteor-auth'

export const composer = ( { context, clearErrors }, onData ) => {

  const { LocalState } = context()
  const errorState = 'LOGIN_ERROR'
  const error = LocalState.get( errorState )

  onData( null, { error } )

  return clearErrors.bind( errorState )
}

export const depsMapper = ( context, actions ) => ({
  login: actions.accounts.login,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
})

export default composeAll(
  composeWithTracker( composer ),
  composeWithTracker( authComposer ),
  useDeps( depsMapper ),
)( Component )
