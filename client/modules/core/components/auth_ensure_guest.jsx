import AccountLoggedIn from './account_logged_in';

const AuthEnsureGuest = ({loggingIn, loggedIn, children}) => {
  if (loggingIn) {
    return (<div>Loading...</div>);
  }
  if (loggedIn) {
    return (<AccountLoggedIn />);
  }
  return (<div>{children}</div>);
};

export default AuthEnsureGuest;
