import _ from 'lodash'

export default function Users() {

  let userSubReady = Meteor.subscribe( 'users.current', ).ready()

  const userId = Meteor.userId() || null
  const user = Meteor.user()
  const profile = _.get( Meteor.user(), 'profile', null )
  const email = _.get( Meteor.user(), 'emails[0].address', null )

  return { userSubReady, userId, user, profile, email, }

}
