// server configs
export default function () {
  // call this to add non-standard Account fields
  Accounts.onCreateUser(function (options, user)  {
    console.log("server onCreateUser called");
    console.log("user.username: " + user.username);
    // check for unique username?
    return user
  });

  Accounts.emailTemplates.siteName = 'My Meteor Mantra';
  Accounts.emailTemplates.from = 'My Meteor Mantra <noreply@testwebsite.com>';
  Accounts.emailTemplates.verifyEmail = {
    subject() {
      return '[My Meteor Mantra] Verify Your Email Address';
    },
    text(user, url) {
      const emailAddress = user.emails[0].address;
      const urlWithoutHash = url.replace('#/', '');
      const supportEmail = 'support@testwebsite.com';
      const emailBody = `Hello!\n\nTo verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

      console.log(`email sent to (${emailAddress}) with content: ${emailBody}`);
      return emailBody;
    },
  };
  Accounts.emailTemplates.resetPassword = {
    subject() {
      return '[My Meteor Mantra] Reset Password Link';
    },
    text(user, url) {
      const emailAddress = user.emails[0].address;
      const urlWithoutHash = url.replace('#/', '');
      const supportEmail = 'support@testwebsite.com';
      const emailBody = `Hello!\n\nTo reset the password for email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

      console.log(`email sent to (${emailAddress}) with content: ${emailBody}`);

      return emailBody;
    },
  };
}
