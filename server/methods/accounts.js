// server methods
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

export default function () {
  Meteor.methods({
    'accounts.deleteAccount'( userId ) {
      check( userId, String )
      // Demo the latency compensation (Delete this in production)
      Meteor._sleepForMs(500)
      if ( Meteor.user() ) {
        Meteor.users.remove( { _id: userId } )
      }
    },
    'accounts.sendResetPasswordLink'( email ) {
      check( email, String )
      let userId = Meteor.users.findOne({ 'emails.address': email })
      // Demo the latency compensation (Delete this in production)
      Meteor._sleepForMs(500)
      if ( !userId ) {
        console.log(`no user account with the address: ${email}`)
        throw new Meteor.Error(
          'sendResetPaswordError.LOGIN_ERROR',
          `User account with the address: ${email} not found. Please try again.`,
          'no user found',
        )
      } else if ( userId ) {
        return Accounts.sendResetPasswordEmail( userId )
      }
    },
  })
}
