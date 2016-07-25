import React from 'react';
import { AppVerifiedMsg, Footer, NavbarMain } from '/client/configs/components';

const LayoutMain = ({
    jumbotron = () => null,
    content = () => null,
    emailVerified, loggedIn,
  }) => (
  <div>
    <NavbarMain />
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
  jumbotron: React.PropTypes.func,
  loggedIn: React.PropTypes.bool,
  emailVerified: React.PropTypes.bool,
};
