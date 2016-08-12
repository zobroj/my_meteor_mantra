// actions
export default {
  signup({ Meteor, LocalState, FlowRouter, Accounts }, email, username, password1, password2) {
    if (!email) {
      return LocalState.set('SIGNUP_ERROR', 'email is required');
    }
    if (!username) {
      return LocalState.set('SIGNUP_ERROR', 'username is required');
    }
    if (!password1) {
      return LocalState.set('SIGNUP_ERROR', 'password1 is required');
    }
    if (!password2) {
      return LocalState.set('SIGNUP_ERROR', 'password2 is required');
    }
    if (password1 !== password2) {
      return LocalState.set('SIGNUP_ERROR', 'password are required to match');
    }

    const usernameAlreadyExists = Meteor.users.findOne({ username });
    if (usernameAlreadyExists) {
      return LocalState.set('SIGNUP_ERROR', 'Username already exists');
    }

    LocalState.set('SIGNUP_ERROR', null);

    const options = { email, password: password1, username };
    Accounts.createUser(options, (err) => {
      if (err && err.reason) {
        return LocalState.set('SIGNUP_ERROR', err.reason);
      }
      Meteor.call('emails.sendAccountVerificationLink', (err) => {
        if (err && err.reason) {
          return LocalState.set('SIGNUP_ERROR', err.reason);
        }
      });
      return FlowRouter.go('/');
    });
  },

  resendVerificationEmail({ Meteor, LocalState }) {
    Meteor.call('emails.sendAccountVerificationLink', (err) => {
      if (err && err.reason) {
        return LocalState.set('SIGNUP_ERROR', err.reason);
      }
    });
    console.log('send verification email sent');
    LocalState.set('SIGNUP_ERROR', null);
  },

  sendResetPasswordLink({ Meteor, LocalState, FlowRouter }, resetEmail) {
    if (!resetEmail) {
      return LocalState.set('RESET_PASSWORD_ERROR', 'Please enter an email.');
    }
    Meteor.call('accounts.sendResetPasswordLink', resetEmail, (err) => {
      if (err && err.reason) {
        console.log(err.reason);
        return LocalState.set('RESET_PASSWORD_ERROR', err.reason);
      }
      // TODO: return something to let user know email was sent
      // TODO: return something to make the modal close
      return FlowRouter.go('/');
    });
    LocalState.set('RESET_PASSWORD_ERROR', null);
  },

  resetPassword({ Meteor, LocalState, FlowRouter }, token, password1, password2) {
    if (!password1 || !password2) {
      return LocalState.set('RESET_PASSWORD_ERROR', 'Both password fields are required');
    }
    if (password1 !== password2) {
      return LocalState.set('RESET_PASSWORD_ERROR', 'Password fields do not match. Try again.');
    }
    if (!token) {
      return LocalState.set('RESET_PASSWORD_ERROR', 'Sorry please check the link, again, or reset your password from the login page again.');
    }
    Accounts.resetPassword(token, password1, (err) => {
      // TODO: check( newPassword, String )
      // TODO: check( token, String )
      if (err & err.reason) {
        console.log(err.reason);
        return LocalState.set('RESET_PASSWORD_ERROR', err.reason);
      }
      // TODO: return something to let user know password was reset
      return FlowRouter.go('/');
    });
    LocalState.set('RESET_PASSWORD_ERROR', null);
  },

  login({ Meteor, LocalState, FlowRouter, Accounts }, email, password) {
    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Login & Password are required!');
    }
    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        console.log(err.reason);
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      FlowRouter.go('/post');
    });
    LocalState.set('LOGIN_ERROR', null);
  },

  logout({ Meteor, FlowRouter }) {
    Meteor.logout();
    FlowRouter.go('/');
  },

  deleteAccount({ Meteor, FlowRouter, LocalState }) {
    if (confirm('Are you sure-sure?')) {
      const userId = Meteor.userId();
      Meteor.call('accounts.deleteAccount', userId, (err) => {
        if (err) {
          return LocalState.set('ACCOUNT_ERROR', err.message);
        }
      });
      FlowRouter.go('/');
    } else {
      // do nothings
    }
  },

  clearErrors({ LocalState }, errorState) {
    return LocalState.set(errorState, null);
  },
};
