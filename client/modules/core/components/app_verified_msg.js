import React from 'react';
import { Alert, Col, Grid, Row } from 'react-bootstrap';

export default class AppVerifiedMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resendLinkClicked: false,
    };
    this._resendVerificationEmail = this._resendVerificationEmail.bind(this);
  }
  displayPendingUser() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Alert bsStyle="danger">
              {this.linkAvailability()}
            </Alert>
          </Col>
        </Row>
      </Grid>
    );
  }
  linkAvailability() {
    const canSendLink = () => (
      <p><strong>Please verify your email to continue. </strong>
        <a onClick={this._resendVerificationEmail} href="#">Resend verification link</a>
      </p>
    );
    const mustWait = () => (
      <div>Check your email. Link has been set. You can resend in 60 seconds.</div>
    );
    const emailSent = this.state.resendLinkClicked;
    if (emailSent) { return mustWait(); }
    return canSendLink();
  }
  _resendVerificationEmail() {
    this.setState({ resendLinkClicked: true });
    this.props.resendVerificationEmail();
    // user can click link after 60 seconds
    const resetState = () => {
      this.setState({ resendLinkClicked: false });
      console.log(this.state.resendLinkClicked);
    };
    /* TODO this is stupid */
    setTimeout(resetState, 60000);
  }
  render() {
    const { loggedIn, emailVerified } = this.props;
    if (loggedIn && !emailVerified) { return this.displayPendingUser(); }
    return (
      <div></div>
    );
  }
}

AppVerifiedMsg.propTypes = {
  emailVerified: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  resendVerificationEmail: React.PropTypes.func,
};
