// actions
export default {
  create({ Meteor, LocalState, FlowRouter }, title, content) {
    if (!title || !content) {
      return LocalState.set('POSTS_CREATE_ERROR', 'Title & Content are required!');
    }

    LocalState.set('POSTS_CREATE_ERROR', null);

    const _id = Meteor.uuid();
    const userId = Meteor.userId();
    const author = Meteor.user().username;

    Meteor.call('posts.create', _id, userId, author, title, content, (err) => {
      if (err) {
        return LocalState.set('POSTS_CREATE_ERROR', err.message);
      }
    });

    FlowRouter.go(`/post/${_id}`);
  },
  clearErrors({ LocalState }, errorState) {
    return LocalState.set(errorState, null);
  },
};
