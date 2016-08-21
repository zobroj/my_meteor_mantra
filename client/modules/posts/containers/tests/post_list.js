const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer, depsMapper} from '../post_list';

describe('posts.containers.post_list', () => {
  describe('composer', () => {
    const posts = [ {_id: 'aa'} ];
    const Collections = {Posts: {find: stub()}};
    var LocalState;
    var Meteor;
    var context;
    var onData;
    beforeEach(() => {
      Collections.Posts.find.returns({fetch: () => posts});
      LocalState = {get: spy()};
      Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});
      context = () => ({Collections, LocalState, Meteor});
      onData = spy();
    });

    it('should get POSTS_ERROR from LocalState', () => {
      composer({context}, spy());
      const args = LocalState.get.args[0];
      expect(args).to.have.length(1);
      expect(args[0]).to.be.equal('POSTS_ERROR');
    });

    it('should subscribe to posts.list', () => {
      composer({context}, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'posts.list'
      ]);
    });

    it('should return cleanup func', () => {
      const clearErrors = spy();
      const clearFunc = composer({context, clearErrors}, spy());
      expect(clearFunc.name).to.be.deep.equal('cleanup');
    });

    describe('after subscribed', () => {
      it('should fetch data "error" and posts and pass to onData', () => {
        LocalState = {get: stub().returns('error')};
        Meteor.subscribe.returns({ready: () => true});

        composer({context}, onData);
        const args = onData.args[0];
        expect(args[0]).to.be.equal(null);
        expect(args[1]).to.be.deep.equal({
          error: 'error', posts
        });
      });
    });
  });

  describe('depsMapper', () => {
    var actions; var context; var deps;
    beforeEach(() => {
      actions = {posts: {
        clearErrors: spy()
      }};
      context = spy();
      deps = depsMapper(context, actions);
    });

    describe('actions', () => {
      it('should map deps', () => {
        expect(deps.clearErrors).to.be.equal(actions.posts.clearErrors);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
