const {describe, it} = global;
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
      expect(args[0]).to.be.equal('SEND_RESET_PASSWORD_LINK');
      expect(args[1]).to.be.match(/\bemail\b.*\brequired\b|\brequired\b.*\bemail\b/);
    });

    it('should clear older LocalState for SEND_RESET_PASSWORD_LINK', () => {
      const Meteor = {call: spy()};
      const LocalState = {set: spy()};
      actions.sendResetPasswordLink({Meteor, LocalState}, 'email');
      expect(LocalState.set.args[0]).to.deep.equal([ 'SEND_RESET_PASSWORD_LINK', null ]);
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
      it('should set SEND_RESET_PASSWORD_LINK with error reason', () => {
        const Meteor = {call: stub()};
        const LocalState = {set: spy()};
        const err = {reason: 'reset passwordy error, yo'};
        Meteor.call.callsArgWith(2, err);

        actions.sendResetPasswordLink({Meteor, LocalState}, 'email');
        expect(LocalState.set.args[1]).to.deep.equal([ 'SEND_RESET_PASSWORD_LINK', err.reason ]);
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