// actions
export default {
  create({FlowRouter, LocalState, Meteor}, userId, username, title, text) {
    if (!userId) {
      return LocalState.set('POSTS_CREATE_ERROR', 'userId is required');
    }
    if (!username) {
      return LocalState.set('POSTS_CREATE_ERROR', 'username is required');
    }
    if (!title || !text) {
      return LocalState.set('POSTS_CREATE_ERROR', 'Title & text are required');
    }

    LocalState.set('POSTS_CREATE_ERROR', null);

    const _id = Meteor.uuid();

    Meteor.call('posts.create', _id, userId, username, title, text, (err) => {
      if (err) {
        LocalState.set('POSTS_CREATE_ERROR', err.reason);
      } else {
        FlowRouter.go(`/post/${_id}`);
      }
    });
  },
  clearErrors({LocalState}, errorState) {
    return LocalState.set(errorState, null);
  },
};
