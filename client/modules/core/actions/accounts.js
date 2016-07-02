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

      } else {

        Meteor.call( 'emails.sendAccountVerificationLink', ( err, response ) => {
          if ( err && err.reason ) {
            return LocalState.set( 'REGISTER_ERROR', err.reason )
          }
        })

        console.log( 'send verification email sent')

        FlowRouter.go( '/post' )

      }
    })

    LocalState.set( 'REGISTER_ERROR', null )
  },

  resendVerificationEmail( { Meteor, LocalState } ) {

    Meteor.call( 'emails.sendAccountVerificationLink', ( err, response ) => {
      if ( err && err.reason ) {
        return LocalState.set( 'REGISTER_ERROR', err.reason )
      }
    })

    //set LocalState with time

    console.log( 'send verification email sent')

  },

  sendResetPasswordLink( { Meteor, LocalState }, resetEmail ) {
    if ( !resetEmail ) {
      return LocalState.set( 'LOGIN_ERROR', 'Please enter an email.')
    }
    console.log( `accounts.actions called to send email to ${resetEmail}`)
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

  deleteAccount( { Meteor, FlowRouter, LocalState } ) {

    if ( confirm('Are you sure-sure?') ) {

      let userId = Meteor.userId()

      Meteor.call( 'accounts.deleteAccount', userId, (err) => {
        if (err) {
          return LocalState.set( 'ACCOUNT_ERROR', err.message )
        }
      })

      FlowRouter.go( '/' )

    } else {
      // do nothings
    }

  },

  clearErrors( { LocalState }, errorState ) {
    return LocalState.set( errorState, null )
  },

}
