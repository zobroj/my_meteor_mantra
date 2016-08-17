const {afterEach, beforeEach, describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../accounts';

describe('core.actions.accounts', () => {
  describe('clearErrors', () => {
    it('should clear SIGNUP_ERROR local state', () => {
      const LocalState = {set: spy()};
      actions.clearErrors({LocalState}, 'SIGNUP_ERROR');
      expect(LocalState.set.callCount).to.be.equal(1);
      expect(LocalState.set.args[0]).to.deep.equal([ 'SIGNUP_ERROR', null ]);
    });
  });

  describe('deleteAccount', () => {
    var confirmStub; var LocalState; var FlowRouter;
    beforeEach(() => {
      FlowRouter = {go: spy()};
      LocalState = {set: spy()};
      confirmStub = stub(window, 'confirm');
    });
    afterEach(() => {
      confirmStub.restore();
    });

    it('should clear older LocalState for ACCOUNT_DELETE_ERROR', () => {
      actions.deleteAccount({LocalState});
      expect(LocalState.set.args[0]).to.deep.equal([ 'ACCOUNT_DELETE_ERROR', null ]);
    });

    describe('if confirmed', () => {
      beforeEach(() => {
        confirmStub.returns(true);
      });

      it('should call Meteor to delete account', () => {
        const Meteor = {call: spy()};
        actions.deleteAccount({FlowRouter, LocalState, Meteor}, 'userId');
        const methodArgs = Meteor.call.args[0];
        expect(methodArgs.slice(0, 2)).to.deep.equal(
          [ 'accounts.deleteAccount', 'userId' ]
        );
        expect(methodArgs[2]).to.be.a('function');
      });

      describe('after Meteor call', () => {
        it('should set ACCOUNT_DELETE_ERROR with error reason', () => {
          const err = {reason: 'delete account probyo'};
          const Meteor = {call: stub().callsArgWith(2, err)};
          actions.deleteAccount({FlowRouter, LocalState, Meteor}, 'userId');
          expect(LocalState.set.args[1]).to.deep.equal([ 'ACCOUNT_DELETE_ERROR', err.reason ]);
        });

        it(`should redirect to '/'`, () => {
          const Meteor = {call: stub().callsArgWith(2, null)};
          actions.deleteAccount({FlowRouter, LocalState, Meteor}, 'userId');
          expect(FlowRouter.go.args[0][0]).to.be.equal('/');
        });
      });
    });

    describe('if not confirmed', () => {
      it('should do nothing', () => {
        confirmStub.returns(false);
        const Meteor = {call: spy()};
        actions.deleteAccount({FlowRouter, LocalState, Meteor}, 'userId');
        expect(Meteor.call.callCount).to.be.equal(0);
      });
    });
  }); // .deleteAccount

  describe('login', () => {
    it('should reject if email is not there', () => {
      const LocalState = {set: spy()};
      actions.login({LocalState}, null, 'password');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('LOGIN_ERROR');
      expect(args[1]).to.be.match(/\bemail\b.*\brequired\b|\brequired\b.*\bemail\b/);
    });

    it('should reject if password is not there', () => {
      const LocalState = {set: spy()};
      actions.login({LocalState}, 'email', null);
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('LOGIN_ERROR');
      expect(args[1]).to.be.match(/\bemail\b.*\brequired\b|\brequired\b.*\bemail\b/);
    });

    it('should clear older LocalState for LOGIN_ERROR', () => {
      const Meteor = {loginWithPassword: spy()};
      const LocalState = {set: spy()};
      actions.login({LocalState, Meteor}, 'email', 'password');
      expect(LocalState.set.args[0]).to.deep.equal([ 'LOGIN_ERROR', null ]);
    });

    it('should call Meteor to loginWithPassword', () => {
      const Meteor = {loginWithPassword: spy()};
      const LocalState = {set: spy()};

      actions.login({LocalState, Meteor}, 'email', 'password');
      expect(Meteor.loginWithPassword.callCount).to.be.equal(1);
      const methodArgs = Meteor.loginWithPassword.args[0];
      expect(methodArgs.slice(0, 2)).to.deep.equal(
        [ 'email', 'password' ]
      );
      expect(methodArgs[2]).to.be.a('function');
    });

    describe('after Meteor call', () => {
      it('should set LOGIN_ERROR with error reason', () => {
        const FlowRouter = {go: spy()};
        const LocalState = {set: spy()};
        const err = {reason: 'login errr probyo'};
        const Meteor = {loginWithPassword: stub()};
        Meteor.loginWithPassword.callsArgWith(2, err);

        actions.login({FlowRouter, LocalState, Meteor}, 'email', 'password');
        expect(Meteor.loginWithPassword.callCount).to.be.equal(1);
        expect(LocalState.set.args[1]).to.deep.equal(
          [ 'LOGIN_ERROR', err.reason ]
        );
      });

      it(`should redirect to '/post'`, () => {
        const FlowRouter = {go: spy()};
        const LocalState = {set: spy()};
        const Meteor = {loginWithPassword: stub()};
        Meteor.loginWithPassword.callsArgWith(2, null);

        actions.login({FlowRouter, LocalState, Meteor}, 'email', 'password');
        expect(FlowRouter.go.args[0][0]).to.be.equal('/post');
      });
    });
  });

  describe('logout', () => {
    it('should clear older LocalState for LOGOUT_ERROR', () => {
      const FlowRouter = {go: spy()};
      const LocalState = {set: spy()};
      const Meteor = {logout: spy()};
      actions.logout({FlowRouter, LocalState, Meteor});
      expect(LocalState.set.args[0]).to.be.deep.equal(
        [ 'LOGOUT_ERROR', null ]
      );
    });

    it('should call Meteor to logout user', () => {
      const FlowRouter = {go: spy()};
      const Meteor = {logout: spy()};
      const LocalState = {set: spy()};
      actions.logout({FlowRouter, LocalState, Meteor});
      const methodArgs = Meteor.logout.args[0];

      expect(Meteor.logout.callCount).to.be.equal(1);
      expect(methodArgs[0]).to.be.a('function');
    });
    describe('after Meteor call', () => {
      it('should set LOGOUT_ERROR with error reason', () => {
        const FlowRouter = {go: spy()};
        const LocalState = {set: spy()};
        const Meteor = {logout: stub()};
        const err = {reason: 'logout probyo'};
        Meteor.logout.callsArgWith(0, err);

        actions.logout({FlowRouter, LocalState, Meteor});
        expect(Meteor.logout.callCount).to.be.equal(1);
        expect(LocalState.set.args[1]).to.deep.equal(
          [ 'LOGOUT_ERROR', err.reason ]
        );
      });

      it(`should redirect user to '/'`, () => {
        const FlowRouter = {go: spy()};
        const LocalState = {set: spy()};
        const Meteor = {logout: stub()};
        Meteor.logout.callsArgWith(0, null);

        actions.logout({FlowRouter, LocalState, Meteor});
        expect(FlowRouter.go.args[0][0]).to.be.equal('/');
      });
    });
  });

  describe('resendVerificationEmail', () => {
    it('should call Meteor to resend verification email', () => {
      const Meteor = {call: spy()};
      const LocalState = {set: spy()};
      actions.resendVerificationEmail({Meteor, LocalState});
      const methodArgs = Meteor.call.args[0];

      expect(Meteor.call.callCount).to.be.equal(1);
      expect(methodArgs.slice(0, 1)).to.deep.equal([
        'emails.sendAccountVerificationLink'
      ]);
      expect(methodArgs[1]).to.be.a('function');
    });

    it('should set SIGNUP_ERROR with error reason', () => {
      const Meteor = {call: stub()};
      const LocalState = {set: spy()};
      const err = { reason: 'resend error Opps!'};
      Meteor.call.callsArgWith(1, err);

      actions.resendVerificationEmail({Meteor, LocalState});
      expect(LocalState.set.args[0]).to.deep.equal([ 'SIGNUP_ERROR', err.reason ]);
    });
  });

  describe('resetPassword', () => {
    it('should reject if password1 is not there', () => {
      const LocalState = {set: spy()};
      actions.resetPassword({LocalState}, 'token', null, 'password2');
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('RESET_PASSWORD_ERROR');
      expect(args[1]).to.be.match(/\bpassword\b.*\brequired\b|\brequired\b.*\bpassword\b/);
    });

    it('should reject if password2 is not there', () => {
      const LocalState = {set: spy()};
      actions.resetPassword({LocalState}, 'token', 'password1', null);
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('RESET_PASSWORD_ERROR');
      expect(args[1]).to.be.match(/\bpassword\b.*\brequired\b|\brequired\b.*\bpassword\b/);
    });

    it('should reject if password1 and password2 do not match', () => {
      const LocalState = {set: spy()};
      actions.resetPassword({LocalState}, 'token', 'password1', 'password2');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('RESET_PASSWORD_ERROR');
      expect(args[1]).to.match(/\bmatch\b.*\brequired\b|\brequired\b.*\bmatch\b/);
    });

    it('should reject if token is not there', () => {
      const LocalState = {set: spy()};
      actions.resetPassword({LocalState}, null, 'password1', 'password1');
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('RESET_PASSWORD_ERROR');
      expect(args[1]).to.be.match(/token.*\brequired\b|\brequired\b.*token/);
    });

    it('should clear older LocalState for RESET_PASSWORD_ERROR', () => {
      const Accounts = {resetPassword: spy()};
      const LocalState = {set: spy()};
      actions.resetPassword({Accounts, LocalState}, 'token', 'password1', 'password1');
      expect(LocalState.set.args[0]).to.deep.equal([ 'RESET_PASSWORD_ERROR', null ]);
    });

    it('should call Accounts to change the password', () => {
      const Accounts = {resetPassword: spy()};
      const LocalState = {set: spy()};

      actions.resetPassword({Accounts, LocalState}, 'token', 'password', 'password');
      const methodArgs = Accounts.resetPassword.args[0];
      expect(methodArgs.slice(0, 2)).to.deep.equal(
        [ 'token', 'password' ]
      );
      expect(methodArgs[2]).to.be.a('function');
    });

    describe('after Accounts call', () => {
      it('should set RESET_PASSWORD_ERROR with error reason', () => {
        const FlowRouter = {go: spy()};
        const LocalState = {set: spy()};
        const err = {reason: 'reset password err yo'};
        const Accounts = {resetPassword: stub()};
        Accounts.resetPassword.callsArgWith(2, err);

        actions.resetPassword({Accounts, LocalState, FlowRouter}, 'token', 'password', 'password');
        expect(Accounts.resetPassword.callCount).to.be.equal(1);
        expect(LocalState.set.args[1]).to.deep.equal([ 'RESET_PASSWORD_ERROR', err.reason ]);
      });

      it(`should redirect to '/'`, () => {
        const LocalState = {set: spy()};
        const FlowRouter = {go: spy()};
        const Accounts = {resetPassword: stub()};
        Accounts.resetPassword.callsArgWith(2, null);

        actions.resetPassword({Accounts, LocalState, FlowRouter}, 'token', 'password', 'password');
        expect(FlowRouter.go.args[0][0]).to.be.equal('/');
      });
    });
  });

  describe('sendResetPasswordLink', () => {
    it('should reject if email is not there', () => {
      const LocalState = {set: spy()};
      actions.sendResetPasswordLink({LocalState}, null);
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('RESET_PASSWORD_ERROR');
      expect(args[1]).to.be.match(/\bemail\b.*\brequired\b|\brequired\b.*\bemail\b/);
    });

    it('should clear older LocalState for RESET_PASSWORD_ERROR', () => {
      const Meteor = {call: spy()};
      const LocalState = {set: spy()};
      actions.sendResetPasswordLink({Meteor, LocalState}, 'email');
      expect(LocalState.set.args[0]).to.deep.equal([ 'RESET_PASSWORD_ERROR', null ]);
    });

    it('should call Meteor to send reset password link', () => {
      const Meteor = {call: spy()};
      const LocalState = {set: spy()};
      actions.sendResetPasswordLink({Meteor, LocalState}, 'email');
      const methodArgs = Meteor.call.args[0];
      expect(Meteor.call.callCount).to.be.equal(1);
      expect(methodArgs.slice(0, 2)).to.deep.equal([
        'accounts.sendResetPasswordLink', 'email'
      ]);
    });

    describe('after Meteor call', () => {
      it('should set RESET_PASSWORD_ERROR with error reason', () => {
        const Meteor = {call: stub()};
        const LocalState = {set: spy()};
        const err = {reason: 'reset passwordy error, yo'};
        Meteor.call.callsArgWith(2, err);

        actions.sendResetPasswordLink({Meteor, LocalState}, 'email');
        expect(LocalState.set.args[1]).to.deep.equal([ 'RESET_PASSWORD_ERROR', err.reason ]);
      });

      it(`should redirect to '/'`, () => {
        const Meteor = {call: stub()};
        const LocalState = {set: spy()};
        const FlowRouter = {go: spy()};
        Meteor.call.callsArgWith(2, null);

        actions.sendResetPasswordLink({Meteor, LocalState, FlowRouter}, 'email');
        expect(FlowRouter.go.args[0][0]).to.be.equal('/');
      });
    });
  });

  describe('signup', () => {
    it('should reject if email is not there', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, null, 'username', 'password1', 'password2');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/\bemail\b.*\brequired\b|\brequired\b.*\bemail\b/);
    });

    it('should reject if username is not there', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, 'email', null, 'password1', 'password2');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/\busername\b.*\brequired\b|\brequired\b.*\busername\b/);
    });

    it('should reject if password1 is not there', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, 'email', 'username', null, 'password2');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/password.*\brequired\b|\brequired\b.*password/);
    });

    it('should reject if password2 is not there', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, 'email', 'username', 'password1', null);
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/password.*\brequired\b|\brequired\b.*password/);
    });

    it('should reject if password1 and password2 do not match', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, 'email', 'username', 'password1', 'password2');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/\bmatch\b.*\brequired\b|\brequired\b.*\bmatch\b/);
    });

    it('should reject if username already exists', () => {
      const Meteor = { users: stub() };
      Meteor.users = { findOne: stub().returns({ _id: 'someId' }) };
      const LocalState = { set: spy() };
      actions.signup(
        { LocalState, Meteor },
        'email', 'existingUsername', 'passwordsMatch', 'passwordsMatch'
      );
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/exists/);
    });

    it('should clear older LocalState for SIGNUP_ERROR', () => {
      const Accounts = { createUser: spy() };
      const Meteor = { call: spy(), users: stub() };
      Meteor.users = { findOne: stub().returns(null) };
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};

      actions.signup(
        {Accounts, LocalState, Meteor, FlowRouter},
        'email', 'uniqueUsername', 'passwordsMatch', 'passwordsMatch'
      );
      expect(LocalState.set.args[0]).to.deep.equal([ 'SIGNUP_ERROR', null ]);
    });

    it('should call Accounts to create the user', () => {
      const Accounts = { createUser: spy() };
      const Meteor = { call: spy(), users: stub() };
      Meteor.users = { findOne: stub().returns(null) };
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};

      actions.signup(
        {Accounts, LocalState, Meteor, FlowRouter},
        'email', 'uniqueUsername', 'passwordsMatch', 'passwordsMatch'
      );

      const methodArgs = Accounts.createUser.args[0];
      expect(methodArgs.slice(0, 1)).to.deep.equal([
        {
          email: 'email',
          password: 'passwordsMatch',
          username: 'uniqueUsername'
        }
      ]);
      expect(methodArgs[1]).to.be.a('function');
    });

    describe('after Accounts call', () => {
      it('should set SIGNUP_ERROR with error reason', () => {
        const Meteor = {call: spy(), users: stub()};
        Meteor.users = {findOne: stub().returns(null)};
        const LocalState = {set: spy()};
        const FlowRouter = {go: spy()};
        const err = {reason: 'after Accounts Oops'};
        const Accounts = {createUser: stub()};
        Accounts.createUser.callsArgWith(1, err);

        actions.signup(
          {Accounts, LocalState, Meteor, FlowRouter},
          'email', 'uniqueUsername', 'passwordsMatch', 'passwordsMatch'
        );
        expect(LocalState.set.args[1]).to.deep.equal([ 'SIGNUP_ERROR', err.reason ]);
      });

      it('should call Metetor to send a verification email', () => {
        const Meteor = {call: spy(), users: stub()};
        Meteor.users = {findOne: stub().returns(null)};
        const LocalState = {set: spy()};
        const FlowRouter = {go: spy()};
        const Accounts = {createUser: stub()};
        Accounts.createUser.callsArgWith(1, null);

        actions.signup(
          {Accounts, LocalState, Meteor, FlowRouter},
          'email', 'uniqueUsername', 'passwordsMatch', 'passwordsMatch'
        );
        const methodArgs = Meteor.call.args[0];

        expect(Meteor.call.callCount).to.be.equal(1);
        expect(methodArgs.slice(0, 1)).to.deep.equal([
          'emails.sendAccountVerificationLink'
        ]);
      });

      describe('after Meteor call', () => {
        it('should set SIGNUP_ERROR with error reason', () => {
          const Meteor = {call: stub(), users: stub()};
          Meteor.users = {findOne: stub().returns(null)};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          const err = {reason: 'after Meteor Oops'};
          const Accounts = {createUser: stub()};
          Accounts.createUser.callsArgWith(1, null);
          Meteor.call.callsArgWith(1, err);

          actions.signup(
            {Accounts, LocalState, Meteor, FlowRouter},
            'email', 'uniqueUsername', 'passwordsMatch', 'passwordsMatch'
          );
          expect(LocalState.set.args[1]).to.deep.equal([ 'SIGNUP_ERROR', err.reason ]);
        });

        it(`should redirect to '/'`, () => {
          const Meteor = {call: stub(), users: stub()};
          Meteor.users = {findOne: stub().returns(null)};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          const Accounts = {createUser: stub()};
          Accounts.createUser.callsArgWith(1, null);
          Meteor.call.callsArgWith(1, null);

          actions.signup(
            {Accounts, LocalState, Meteor, FlowRouter},
            'email', 'uniqueUsername', 'passwordsMatch', 'passwordsMatch'
          );
          expect(FlowRouter.go.args[0][0]).to.be.equal('/');
        });
      });
    });
  });
});
