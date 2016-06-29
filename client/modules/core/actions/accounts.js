// actions
export default {

  register( { Meteor, LocalState, FlowRouter, Accounts }, email, username, password1, password2 ) {

    if ( !email || !username || !password1 || !password2 ) {
      return LocalState.set( 'REGISTER_ERROR', 'Please fill out all the required fields!' )
    }

    if ( password1 !== password2 ) {
      return LocalState.set( 'REGISTER_ERROR', 'Passwords do not match!' )
    }

    // check if username already exists
    const usernameAlreadyExists = Meteor.users.findOne( { username: username } )

    if ( usernameAlreadyExists ) {
      return LocalState.set( 'REGISTER_ERROR', 'Username already exists' )
    }

    const options = {
      email: email,
      password: password1,
      username: username,
    }

    Accounts.createUser( options, ( err ) => {
      if ( err && err.reason ) {
        return LocalState.set( 'REGISTER_ERROR', err.reason )
      }

      FlowRouter.go( '/post' )

    })

    // uncomment below to enable email
    Meteor.call( 'emails.sendAccountVerificationLink', ( err, response ) => {
      if ( err && err.reason ) {
        return LocalState.set( 'REGISTER_ERROR', err.reason )
      }
      console.log( 'sendVerificationLink success' );
    })

    LocalState.set( 'REGISTER_ERROR', null )
  },

  login( { Meteor, LocalState, FlowRouter, Accounts }, email, password ) {

    if (!email || !password) {
      return LocalState.set( 'LOGIN_ERROR', 'Login & Password are required!' )
    }

    Meteor.loginWithPassword(email, password, (err) => {

      if (err && err.reason) {
        console.log( err.reason )
        return LocalState.set('LOGIN_ERROR', err.reason)
      }
      FlowRouter.go( '/post' )
    })

    LocalState.set( 'LOGIN_ERROR', null )
  },

  logout( { Meteor, FlowRouter } ) {
    Meteor.logout()
    FlowRouter.go( '/' )
  },

  clearErrors( { LocalState }, errorState ) {
    return LocalState.set( errorState, null )
  },

}
