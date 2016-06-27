// server methods
import { Meteor } from 'meteor/meteor'

export default function () {
  Meteor.methods({
    'emails.sendAccountVerificationLink'() {
      let userId = Meteor.userId()

      if ( userId ) {

        SSR.compileTemplate(
          'htmlEmail',
          Assets.getText( 'html-email.html')
        )

        let emailData = {
          username: "VonIobro",
          email: "von.iobro@gmail.com",
        }

        Email.send({
          to: "von.iobro@gmail.com",
          from: "abctutorme123@gmail.com",
          subject: "My Mantra Signup",
          html: SSR.render( 'htmlEmail', emailData ),
        })

        // return Accounts.sendVerificationEmail( userId )
      }

    }
  })

}
