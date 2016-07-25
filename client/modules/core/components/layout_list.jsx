import React from 'react';
import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';
import { AppVerifiedMsg } from '/client/configs/components';
import { Grid } from 'react-bootstrap';

const LayoutList = ({
    content = () => null,
    emailVerified, loggedIn,
  }) => (
  <div>
    <NavbarMain />
    <AppVerifiedMsg
      loggedIn={loggedIn}
      emailVerified={emailVerified}
    />
    <Grid>
      {content()}
    </Grid>
    <hr />
    <Footer />
  </div>
);

export default LayoutList;

LayoutList.propTypes = {
  content: React.PropTypes.func,
  loggedIn: React.PropTypes.bool,
  emailVerified: React.PropTypes.bool,
};
