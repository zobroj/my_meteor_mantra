// actions
export default {

  create( { Meteor, LocalState, FlowRouter }, title, content ) {

    if ( !title || !content ) {
      return LocalState.set( 'POSTS_CREATE_ERROR', 'Title & Content are required!' )
    }

    LocalState.set( 'POSTS_CREATE_ERROR', null )

    const _id = Meteor.uuid()
    const userId = Meteor.userId()
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call( 'posts.create', _id, userId, title, content, (err) => {
      if (err) {
        return LocalState.set( 'POSTS_CREATE_ERROR', err.message )
      }
    });

    FlowRouter.go( `/post/${ _id }` )

  },

  clearErrors( { LocalState }, errorState ) {
    return LocalState.set( errorState, null )
  },

}
