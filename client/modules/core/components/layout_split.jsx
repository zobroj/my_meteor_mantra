import React from 'react';
import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';
import { AppVerifiedMsg } from '/client/configs/components';
import { Col, Grid, Row } from 'react-bootstrap';

const LayoutSplit = ({
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
      logedIn={loggedIn}
      emailVerified={emailVerified}
    />
    <Grid>
      <Row>
        <Col sm={6}>
          <h3>Why hello there.</h3>
        </Col>
        <Col sm={6}>
          {content()}
        </Col>
      </Row>
    </Grid>
    <hr />
    <Footer />
  </div>
);

export default LayoutSplit;

LayoutSplit.propTypes = {
  content: React.PropTypes.func,
  emailVerified: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  email: React.PropTypes.string,
  username: React.PropTypes.string,
};
