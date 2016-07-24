// actions
export default {
  create({ Meteor, LocalState }, postId, content) {
    if (!content) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'Author & Comment are required.');
    }
    if (!postId) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'postId is required.');
    }

    LocalState.set('CREATE_COMMENT_ERROR', null);

    const _id = Meteor.uuid();
    const userId = Meteor.userId();
    const author = Meteor.user().username;

    return Meteor.call('posts.createComment', _id, userId, author, postId, content,
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
