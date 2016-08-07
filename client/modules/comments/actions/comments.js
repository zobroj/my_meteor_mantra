// actions
export default {
  create({ LocalState, Meteor }, postId, text) {
    if (!text) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'Author & Comment are required.');
    }

    if (!postId) {
      return LocalState.set('CREATE_COMMENT_ERROR', 'postId is required.');
    }

    LocalState.set('CREATE_COMMENT_ERROR', null);

    /* TODO if in authComposer, remove and link with helpers */
    const id = Meteor.uuid();
    const userId = Meteor.userId();
    const username = Meteor.user().username;

    Meteor.call('posts.createComment', id, userId, username, postId, text, (err) => {
      if (err) {
        LocalState.set('CREATE_COMMENT_ERROR', err.message);
      }
    });
  },

  clearErrors({ LocalState }) {
    return LocalState.set('CREATE_COMMENT_ERROR', null);
  },
};
