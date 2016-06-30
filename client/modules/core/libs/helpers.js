import { Meteor } from 'meteor/meteor'
// component helper
export function isActiveRoute( compareRoute ) {

  let currentRoute = FlowRouter.getRouteName()

  // if user goes to route w/o
  if ( currentRoute != undefined ) {

    // remove characters after '.' in route name
    let _currentRoute = FlowRouter.getRouteName().split( ".", 1 )

    return _currentRoute == compareRoute ? 'active' : ''

  } else {

    return '';

  }

}

// actions helper
export function _sendVerificationEmail() {

  Meteor.call( 'emails.sendAccountVerificationLink', ( err, response ) => {
    if ( err && err.reason ) {
      return LocalState.set( 'REGISTER_ERROR', err.reason )
    }
  })
  console.log( 'send verification email sent')

}
