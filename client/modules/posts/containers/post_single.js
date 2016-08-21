import PostSingle from '../components/post_single.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, postId }, onData) => {
  const {Collections, FlowRouter, LocalState, Meteor} = context();
  const subscription = Meteor.subscribe('posts.single', postId);

  if (subscription.ready()) {
    const post = Collections.Posts.findOne(postId);

    if (!post) {
      LocalState.set('POSTS_ERROR', 'Post not found. Please try again.');
      FlowRouter.go('posts.list');
    } else {
      onData(null, { post });
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PostSingle);
