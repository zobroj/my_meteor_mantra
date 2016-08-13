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
        LocalState.set('SIGNUP_ERROR', err.reason);
      } else {
        Meteor.call('emails.sendAccountVerificationLink', (err) => {
          if (err && err.reason) {
            return LocalState.set('SIGNUP_ERROR', err.reason);
          }
        });
        return FlowRouter.go('/');
      }
    });
  },

  resendVerificationEmail({ Meteor, LocalState }) {
    Meteor.call('emails.sendAccountVerificationLink', (err) => {
      if (err && err.reason) {
        return LocalState.set('SIGNUP_ERROR', err.reason);
      }
    });
    LocalState.set('SIGNUP_ERROR', null);
  },

  sendResetPasswordLink({ Meteor, LocalState, FlowRouter }, resetEmail) {
    if (!resetEmail) {
      return LocalState.set('SEND_RESET_PASSWORD_LINK', 'email address is required');
    }

    LocalState.set('SEND_RESET_PASSWORD_LINK', null);

    Meteor.call('accounts.sendResetPasswordLink', resetEmail, (err) => {
      if (err && err.reason) {
        return LocalState.set('SEND_RESET_PASSWORD_LINK', err.reason);
      }
      // TODO: return something to let user know email was sent
      // TODO: return something to make the modal close
      return FlowRouter.go('/');
    });
  },

  resetPassword({ Accounts, LocalState, FlowRouter }, token, password1, password2) {
    if (!password1 || !password2) {
      return LocalState.set('RESET_PASSWORD_ERROR', 'Both password fields are required');
    }
    if (password1 !== password2) {
      return LocalState.set('RESET_PASSWORD_ERROR', 'Password are required to match');
    }
    if (!token) {
      return LocalState.set('RESET_PASSWORD_ERROR', 'token is required');
    }
    LocalState.set('RESET_PASSWORD_ERROR', null);
    Accounts.resetPassword(token, password1, (err) => {
      // TODO: check( newPassword, String )
      // TODO: check( token, String )
      if (err && err.reason) {
        LocalState.set('RESET_PASSWORD_ERROR', err.reason);
      } else {
        // TODO: return something to let user know password was reset
        FlowRouter.go('/');
      }
    });
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'email & password are required');
    }
    LocalState.set('LOGIN_ERROR', null);
    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        LocalState.set('LOGIN_ERROR', err.reason);
      } else {
        FlowRouter.go('/post');
      }
    });
  },

  logout({FlowRouter, LocalState, Meteor}) {
    LocalState.set('LOGOUT_ERROR', null);
    Meteor.logout((err) => {
      if (err && err.reason) {
        LocalState.set('LOGOUT_ERROR', err.reason);
      } else {
        FlowRouter.go('/');
      }
    });
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
