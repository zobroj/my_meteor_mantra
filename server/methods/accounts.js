// server methods
// import { Users } from '/lib/collections'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

export default function () {

  Meteor.methods({
    'accounts.deleteAccount'( userId ) {
      check( userId, String )

      // Demo the latency compensation (Delete this in production)
      Meteor._sleepForMs(500)

      if ( Meteor.user() ) {
        Meteor.users.remove( {_id: userId} )
      }

    }
  })

}
