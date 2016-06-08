export default {
  create( { Meteor, LocalState }, postId, author, content ) {
    if ( !author || !content ) {
      return LocalState.set( 'CREATE_COMMENT_ERROR', 'Author & Comment are required.' );
    }

    if ( !postId ) {
      return LocalState.set( 'CREATE_COMMENT_ERROR', 'postId is required.' );
    }

    LocalState.set( 'CREATE_COMMENT_ERROR', null );

    const id = Meteor.uuid();
    Meteor.call( 'posts.createComment', id, postId, author, content, (err) => {
      if (err) {
        return LocalState.set( 'CREATE_COMMENT_ERROR', err.message );
      }
    });
  },

  clearErrors( { LocalState } ) {
    return LocalState.set( 'CREATE_COMMENT_ERROR', null );
  }
};
