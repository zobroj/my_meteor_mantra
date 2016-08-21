const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import {composer, depsMapper} from '../post_create';

describe('posts.containers.post_create', () => {
  describe('composer', () => {
    it('should get POSTS_CREATE_ERROR from local state', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});

      composer({context}, spy());

      const args = LocalState.get.args[0];
      expect(args).to.have.length(1);
      expect(args[0]).to.be.equal('POSTS_CREATE_ERROR');
    });

    it('should call onData with null and {error}', () => {
      const LocalState = {get: stub().returns('error')};
      const context = () => ({LocalState});
      const onData = spy();

      composer({context}, onData);

      const args = onData.args[0];

      expect(args[0]).to.be.equal(null);
      expect(args[1]).to.be.deep.equal({error: 'error'});
    });

    it('should return cleanup func', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});
      const clearErrors = spy();

      const clearFunc = composer({context, clearErrors}, spy());
      expect(clearFunc.name).to.be.deep.equal('cleanup');
    });
  });

  describe('depsMapper', () => {
    var actions; var context; var deps;
    beforeEach(() => {
      actions = {posts: {
        create: spy(), clearErrors: spy()
      }};
      context = spy();
      deps = depsMapper(context, actions);
    });

    describe('actions', () => {
      it('should map deps', () => {
        expect(deps.create).to.be.equal(actions.posts.create);
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
