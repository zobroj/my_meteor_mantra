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
