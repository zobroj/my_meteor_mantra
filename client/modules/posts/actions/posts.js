export default {

  create( { Meteor, LocalState, FlowRouter }, author, title, content ) {

    if ( !title || !content ) {
      return LocalState.set( 'POSTS_ERROR', 'Title & Content are required!' );
    }

    LocalState.set( 'POSTS_ERROR', null );

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call( 'posts.create', id, author, title, content, (err) => {
      if (err) {
        return LocalState.set( 'POSTS_ERROR', err.message );
      }
    });

    FlowRouter.go( `/post/${ id }` );

  },

  clearErrors( { LocalState } ) {
    return LocalState.set( 'POSTS_ERROR', null );
  },

};
