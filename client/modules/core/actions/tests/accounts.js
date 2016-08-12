const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../accounts';

describe('core.actions.accounts', () => {
  describe('signup', () => {
    it('should reject if email is not there', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, null, 'username', 'password1', 'password2');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if username is not there', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, 'email', null, 'password1', 'password2');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if password1 is not there', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, 'email', 'username', null, 'password2');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if password2 is not there', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, 'email', 'username', 'password1', null);
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if password1 and password2 do not match', () => {
      const LocalState = {set: spy()};
      actions.signup({LocalState}, 'email', 'username', 'password1', 'password2');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SIGNUP_ERROR');
      expect(args[1]).to.match(/required/);
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
      describe('if there is an error', () => {
        it('should set SIGNUP_ERROR with error message', () => {
          const Meteor = {call: spy(), users: stub()};
          Meteor.users = {findOne: stub().returns(null)};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          const err = {reason: 'Oops'};
          const Accounts = {createUser: stub()};
          Accounts.createUser.callsArgWith(1, err);

          actions.signup(
            {Accounts, LocalState, Meteor, FlowRouter},
            'email', 'uniqueUsername', 'passwordsMatch', 'passwordsMatch'
          );
          expect(LocalState.set.args[1]).to.deep.equal([ 'SIGNUP_ERROR', err.reason ]);
        });
      });

      describe('if no error', () => {
        it('should call Metetor to send a verification email'/* , () => {
          const Meteor = { uuid: () => 'id', call: spy() };
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};

          actions.create({LocalState, Meteor, FlowRouter}, 'userId', 'username', 'postId', 'text');
          const methodArgs = Meteor.call.args[0];

          expect(methodArgs.slice(0, 6)).to.deep.equal([
            'posts.createComment', 'id', 'userId', 'username', 'postId', 'text'
          ]);
          expect(methodArgs[6]).to.be.a('function');
        }*/);
      });
      describe('after Meteor call', () => {
        describe('if there is an error', () => {
          it('should set SIGNUP_ERROR with error message'/* , () => {
            const Meteor = {uuid: () => 'id', call: stub()};
            const LocalState = {set: spy()};
            const FlowRouter = {go: spy()};
            const err = {message: 'Oops'};
            Meteor.call.callsArgWith(6, err);

            actions.create({Meteor, LocalState, FlowRouter}, 'userId', 'username', 'postId', 'text');
            expect(LocalState.set.args[1]).to.deep.equal([ 'SIGNUP_ERROR', err.message ]);
          }*/);
        });
        describe('if no error', () => {
          it(`should redirect to '/'`/* , () => {
            const Meteor = {uuid: () => 'id', call: stub()};
            const LocalState = {set: spy()};
            const FlowRouter = {go: spy()};
            const err = {message: 'Oops'};
            Meteor.call.callsArgWith(6, err);

            actions.create({Meteor, LocalState, FlowRouter}, 'userId', 'username', 'postId', 'text');
            expect(LocalState.set.args[1]).to.deep.equal([ 'SIGNUP_ERROR', err.message ]);
          }*/);
        });
      });
    });

  });

  describe('clearErrors', () => {
    it('should clear SIGNUP_ERROR local state'/* , () => {
      const LocalState = {set: spy()};
      actions.clearErrors({LocalState});
      expect(LocalState.set.callCount).to.be.equal(1);
      expect(LocalState.set.args[0]).to.deep.equal([ 'SIGNUP_ERROR', null ]);
    }*/);
  });
});
