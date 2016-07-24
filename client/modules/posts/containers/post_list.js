import PostList from '../components/post_list.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, clearErrors }, onData) => {
  const { Meteor, Collections, LocalState } = context();
  const errorState = 'POSTS_ERROR';
  const error = LocalState.get(errorState);
  const subscription = Meteor.subscribe('posts.list');

  if (subscription.ready()) {
    const options = {
      sort: { createdAt: -1 },
    };
    const posts = Collections.Posts.find({}, options).fetch();

    onData(null, { posts, error });
  }

  return clearErrors.bind(errorState);
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions.posts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PostList);
