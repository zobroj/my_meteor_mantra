import React from 'react';
import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';
import { AppVerifiedMsg } from '/client/configs/components';
import { Grid } from 'react-bootstrap';

const LayoutList = ({
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
    <Grid>
      {content({ email, emailVerified, loggedIn, loggingIn, username })}
    </Grid>
    <hr />
    <Footer />
  </div>
);

export default LayoutList;

LayoutList.propTypes = {
  content: React.PropTypes.func,
  email: React.PropTypes.string,
  emailVerified: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  username: React.PropTypes.string,
};
