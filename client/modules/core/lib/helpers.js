export function isActiveRoute(compareRoute) {
  // remove characters after '.' in route name
  const currentRoute = FlowRouter.getRouteName().split('.', 1).toString();

  // if user goes to route w/o
  if (currentRoute !== undefined) {
    return currentRoute === compareRoute ? 'active' : '';
  }
  return '';
}
