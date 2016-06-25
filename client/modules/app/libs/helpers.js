export function isActiveRoute( compareRoute ) {
  // remove characters after '.' in route name
  let currentRoute = FlowRouter.getRouteName().split( ".", 1 )

  return currentRoute == compareRoute ? 'active' : ''
}
