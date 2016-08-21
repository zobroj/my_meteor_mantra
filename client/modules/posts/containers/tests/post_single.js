const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../post_single';

describe('posts.containers.post_single', () => {
  const postId = 'the-postid';
  const post = [ {_id: 'aa'} ];
  var Collections; var FlowRouter; var LocalState; var Meteor;
  var context; var onData;
  beforeEach(() => {
    Collections = {Posts: {findOne: stub()}};
    FlowRouter = {go: spy()};
    LocalState = {set: spy()};
    Meteor = {subscribe: stub()};
    onData = spy();
    context = () => ({Collections, FlowRouter, LocalState, Meteor});
  });

  describe('composer', () => {
    it('should subscribe to posts.single', () => {
      Meteor.subscribe.returns({ready: () => false});
      composer({context, postId}, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'posts.single', postId
      ]);
    });

    describe('after subscribed', () => {
      describe('if post found', () => {
        it('should get post & pass to onData', () => {
          Meteor.subscribe.returns({ready: () => true});
          Collections.Posts.findOne.returns(post);
          composer({context, postId}, onData);
          expect(onData.args[0]).to.deep.equal([ null, {post} ]);
        });
      });

      describe('if post is not found', () => {
        it('should call LocalState to set error', () => {
          Meteor.subscribe.returns({ready: () => true});
          Collections.Posts.findOne.returns(null);
          composer({context, postId}, onData);
          const args = LocalState.set.args[0];
          expect(args[0]).to.be.equal('POSTS_ERROR');
          expect(args[1]).to.match(/not found/);
        });

        it('should call FlowRouter to redirect to posts.list', () => {
          Meteor.subscribe.returns({ready: () => true});
          Collections.Posts.findOne.returns(null);
          composer({context, postId}, onData);
          const args = FlowRouter.go.args[0];
          expect(args[0]).to.be.equal('posts.list');
        });
      });
    });
  });
});
