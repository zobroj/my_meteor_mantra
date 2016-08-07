// actions
export default {
  create({ Meteor, LocalState }, userId, username, postId, text) {
    if (!userId) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'userId is required.');
    }
    if (!username) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'username is required.');
    }
    if (!text) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'Author & Comment are required.');
    }
    if (!postId) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'postId is required.');
    }

    LocalState.set('CREATE_COMMENT_ERROR', null);

    const _id = Meteor.uuid();

    return Meteor.call('posts.createComment', _id, userId, username, postId, text,
      (err) => {
        if (err) {
          LocalState.set('CREATE_COMMENT_ERROR', err.message);
        }
      });
  },

  clearErrors({ LocalState }) {
    return LocalState.set('CREATE_COMMENT_ERROR', null);
  },
};
