export default {

  register( { Meteor, LocalState, FlowRouter, Accounts }, email, password1, password2 ) {

    if ( !email || !password1 || !password2 ) {
      return LocalState.set( 'REGISTER_ERROR', 'Please fill out all the required fields!' )
    }

    if ( password1 !== password2 ) {
      return LocalState.set( 'REGISTER_ERROR', 'Passwords do not match!' )
    }

    Accounts.createUser( { email, password: password1 }, ( err ) => {
      if ( err && err.reason ) {
        return LocalState.set( 'REGISTER_ERROR', err.reason )
      }
      FlowRouter.go( '/foobar' )
    })
  },

  login( { Meteor, LocalState, FlowRouter, Accounts }, email, password ) {

    if (!email || !password) {
      return LocalState.set( 'LOGIN_ERROR', 'Login & Password are required!' )
    }

    LocalState.set( 'LOGIN_ERROR', null )

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason)
      }
      FlowRouter.go('/foobar')
    })

  },

  logout( { Meteor, FlowRouter } ) {
    Meteor.logout()
    FlowRouter.go( '/' )
  },

  clearErrors( { LocalState }, errorState ) {
    return LocalState.set( errorState, null )
  },

}
