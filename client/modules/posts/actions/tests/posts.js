const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../posts';

describe('posts.actions.posts', () => {
  describe('create', () => {
    var LocalState; var FlowRouter;
    beforeEach(() => {
      FlowRouter = {go: spy()};
      LocalState = {set: spy()};
    });

    it('should reject if userId is not there', () => {
      actions.create({LocalState}, null, 'username', 'title', 'text');
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('POSTS_CREATE_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if username is not there', () => {
      actions.create({LocalState}, 'userId', null, 'title', 'text');
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('POSTS_CREATE_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if title is not there', () => {
      actions.create({LocalState}, 'userId', 'username', null, 'text');
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('POSTS_CREATE_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if content is not there', () => {
      actions.create({LocalState}, 'userId', 'username', 'title', null);
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('POSTS_CREATE_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should clear older LocalState for POSTS_CREATE_ERROR', () => {
      const Meteor = {uuid: spy(), call: spy()};
      actions.create({FlowRouter, LocalState, Meteor}, 'userId', 'username', 'title', 'text');
      expect(LocalState.set.args[0]).to.deep.equal([ 'POSTS_CREATE_ERROR', null ]);
    });

    it('should call Meteor.call to save the post', () => {
      const Meteor = {uuid: () => '_id', call: spy()};
      actions.create({FlowRouter, LocalState, Meteor}, 'userId', 'username', 'title', 'text');
      const methodArgs = Meteor.call.args[0];
      expect(methodArgs.slice(0, 6)).to.deep.equal([
        'posts.create', '_id', 'userId', 'username', 'title', 'text'
      ]);
      expect(methodArgs[6]).to.be.a('function');
    });

    it('should redirect user to the post', () => {
      const _id = 'dsds';
      const Meteor = {uuid: () => _id, call: stub()};
      Meteor.call.callsArg(6);
      actions.create({FlowRouter, LocalState, Meteor}, 'userId', 'username', 'title', 'text');
      expect(FlowRouter.go.args[0][0]).to.be.equal(`/post/${_id}`);
    });

    describe('after Meteor.call', () => {
      describe('if there is error', () => {
        it('should set POSTS_CREATE_ERROR with the error reason', () => {
          const Meteor = {uuid: () => 'id', call: stub()};
          const err = {reason: 'posts crate whoops'};
          Meteor.call.callsArgWith(6, err);
          actions.create({FlowRouter, LocalState, Meteor}, 'userId', 'username', 'title', 'text');
          expect(LocalState.set.args[1]).to.deep.equal([ 'POSTS_CREATE_ERROR', err.reason ]);
        });
      });
    });
  });

  describe('clearErrors', () => {
    it('should clear POSTS_CREATE_ERROR local state', () => {
      const LocalState = {set: spy()};
      actions.clearErrors({LocalState}, 'POSTS_CREATE_ERROR');
      expect(LocalState.set.callCount).to.be.equal(1);
      expect(LocalState.set.args[0]).to.deep.equal([ 'POSTS_CREATE_ERROR', null ]);
    });
  });
});
