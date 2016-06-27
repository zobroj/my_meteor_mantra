// server methods
import { Meteor } from 'meteor/meteor'

export default function () {
  Meteor.methods({
    'emails.sendAccountVerificationLink'() {
      let userId = Meteor.userId()

      if ( userId ) {

        Email.send({
          to: "von.iobro@gmail.com",
          from: "abctutorme123@gmail.com",
          subject: "My Mantra Signup",
          text: "Thanks for signing up^^",
        })

        // return Accounts.sendVerificationEmail( userId )
      }

    }
  })

}
