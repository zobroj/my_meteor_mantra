import React from 'react';
import { AppVerifiedMsg, Footer, NavbarMain } from '/client/configs/components';

const LayoutMain = ({
    jumbotron = () => null,
    content = () => null,
    email, emailVerified, loggedIn, loggingIn, username,
  }) => (
  <div>
    <NavbarMain
      loggedIn={loggedIn}
      loggingIn={loggingIn}
      emailVerified={emailVerified}
      email={email}
      username={username}
    />
    <AppVerifiedMsg
      loggedIn={loggedIn}
      emailVerified={emailVerified}
    />
    {jumbotron()}
    {content()}
    <hr />
    <Footer />
  </div>
);

export default LayoutMain;

LayoutMain.propTypes = {
  content: React.PropTypes.func,
  email: React.PropTypes.string,
  emailVerified: React.PropTypes.bool,
  jumbotron: React.PropTypes.func,
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  username: React.PropTypes.string,
};
