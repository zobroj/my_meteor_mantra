// server methods
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'

export default function () {
  Meteor.methods({
    'emails.sendAccountVerificationLink'() {
      let userId = Meteor.userId()

      if ( userId ) {

        return Accounts.sendVerificationEmail( userId )

        // SSR.compileTemplate(
        //   'htmlEmail',
        //   Assets.getText( 'html-email.html')
        // )
        //
        // const username = Meteor.user().username
        // const email = _.get( Meteor.user(), 'emails[0].address', {} )
        //
        // let emailData = {
        //   username: username,
        //   email: email,
        // }
        //
        // Email.send({
        //   to: "von.iobro@gmail.com",
        //   from: "abctutorme123@gmail.com",
        //   subject: "My Mantra Signup",
        //   html: SSR.render( 'htmlEmail', emailData ),
        // })

      }
    }
  })
}
