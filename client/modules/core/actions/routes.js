export default {
  isActiveRoute({FlowRouter}, compareRoute) {
    // remove characters after '.' in route name
    var currentRoute;

    const checkCurrentRoute = () => {
      if (FlowRouter.getRouteName() === undefined) {
        currentRoute = '';
        return currentRoute;
      }
      currentRoute = FlowRouter.getRouteName().split('.', 1).toString();
      return currentRoute;
    };

    // if user goes to route w/o
    if (checkCurrentRoute() !== undefined) {
      return currentRoute === compareRoute ? 'active' : '';
    }
    return '';
  }
};
