// server configs
export default function () {

  // call this to add non-standard Account fields
  Accounts.onCreateUser( function ( options, user ) {
    console.log( "server onCreateUser called" )
    console.log( "user.username: " + user.username )
    // check for unique username?
    return user
  })

  Accounts.emailTemplates.siteName = 'My Meteor Mantra'
  Accounts.emailTemplates.from = 'My Meteor Mantra <noreply@testwebsite.com>'
  Accounts.emailTemplates.verifyEmail = {
    subject() {
      return '[My Meteor Mantra] Verify Your Email Address'
    },
    text( user, url ) {
      let emailAddress   = user.emails[0].address,
          urlWithoutHash = url.replace( '#/', '' ),
          supportEmail   = 'support@testwebsite.com',
          emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`

      console.log( `email sent to (${emailAddress}) with content: ${emailBody}` )

      return emailBody
    },
  }
  Accounts.emailTemplates.resetPassword = {
    subject() {
      return '[My Meteor Mantra] Reset Password Link'
    },
    text( user, url ) {
      let emailAddress   = user.emails[0].address,
          urlWithoutHash = url.replace( '#/', '' ),
          supportEmail   = 'support@testwebsite.com',
          emailBody      = `To reset the password for email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`

      console.log( `email sent to (${emailAddress}) with content: ${emailBody}` )

      return emailBody
    },
  }

}
