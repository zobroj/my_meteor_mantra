import { useDeps, composeWithTracker, composeAll } from 'mantra-core'
import { authComposer } from 'meteor-auth'
import Component from '../layouts/split_layout'

export const composer = ( { context }, onData ) => {

  const { LocalState, Users } = context()
  const { emailVerified } = Users()

  onData( null, { emailVerified } )

}

export default composeAll(
  composeWithTracker( composer ),
  composeWithTracker( authComposer ),
  useDeps(),
)( Component )
