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
    const { user } = this.props;
    return (
      <Row>
        <Col sm={12}>
          <ul>
            <li>Email: {user.email}</li>
            <li>Username: {user.username}</li>
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
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  deleteAccount: React.PropTypes.func,
  user: React.PropTypes.object,
};
