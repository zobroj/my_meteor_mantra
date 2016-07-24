import React from 'react';
import { AppVerifiedMsg, Footer, NavbarMain } from '/client/configs/components';

const LayoutMain = ({ jumbotron = () => null, content = () => null, emailVerified, loggedIn }) => (
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
  jumbotron: React.PropTypes.func,
  content: React.PropTypes.func,
  emailVerified: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
};
