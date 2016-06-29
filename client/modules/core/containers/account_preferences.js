import { useDeps, composeWithTracker, composeAll } from 'mantra-core'
import Component from '../components/account_preferences'
import { authComposer } from 'meteor-auth'

export const composer = ( { context }, onData ) => {

  const { LocalState, Users } = context()
  const { email, username } = Users()

  onData( null, { email, username } )

}

export const depsMapper = ( context, actions ) => ({
  deleteAccount: actions.accounts.deleteAccount,
  clearErrors: actions.accounts.clearErrors,
  context: () => context,
})

export default composeAll(
  composeWithTracker( composer ),
  composeWithTracker( authComposer ),
  useDeps( depsMapper ),
)( Component )
