import PostList from '../components/post_list.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {Collections, LocalState, Meteor} = context();
  const error = LocalState.get('POSTS_ERROR');
  const subscription = Meteor.subscribe('posts.list');

  if (subscription.ready()) {
    const options = {sort: { createdAt: -1 }};
    const posts = Collections.Posts.find({}, options).fetch();

    onData(null, { posts, error });
  }
  const cleanup = () => {
    clearErrors('POSTS_ERROR');
  };
  return cleanup;
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions.posts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PostList);
