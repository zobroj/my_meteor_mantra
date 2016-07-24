import React from 'react';
import AccountNotLoggedIn from './account_not_logged_in';
import { AppLoading } from '/client/configs/components';
import { Button, Col, Row, Well } from 'react-bootstrap';

class AccountPreferences extends React.Component {
  constructor(props) {
    super(props);
    this._deleteAccount = this._deleteAccount.bind(this);
  }
  displayUser() {
    const { email, username } = this.props;
    return (
      <Row>
        <Col sm={12}>
          <ul>
            <li>Email: {email}</li>
            <li>Username: {username}</li>
          </ul>
          <Well>
            <p>For testing purposes: </p>
            <Button bsStyle="danger" onClick={this._deleteAccount}>Delete account</Button>
          </Well>
        </Col>
      </Row>
    );
  }
  displayLoading() {
    return (
      <AppLoading />
    );
  }
  displayGuest() {
    return (
      <AccountNotLoggedIn />
    );
  }
  _deleteAccount(event) {
    event.preventDefault();
    const { deleteAccount } = this.props;
    deleteAccount();
  }
  render() {
    const { loggedIn, loggingIn } = this.props;
    if (loggingIn) { return this.displayLoading(); }
    if (loggedIn) { return this.displayUser(); }
    return this.displayGuest();
  }
}

export default AccountPreferences;

AccountPreferences.propTypes = {
  email: React.PropTypes.string,
  username: React.PropTypes.string,
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  deleteAccount: React.PropTypes.func,
};
