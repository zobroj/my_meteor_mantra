// component helper
export function isActiveRoute(compareRoute) {
  const currentRoute = FlowRouter.getRouteName();

  // if user goes to route w/o
  if (currentRoute !== undefined) {
    // remove characters after '.' in route name
    const _currentRoute = FlowRouter.getRouteName().split('.', 1);

    return _currentRoute === compareRoute ? 'active' : '';
  }
  return '';
}
