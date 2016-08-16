import React from 'react';
import { AuthEnsureUser } from '/client/configs/components';
import { Button, Col, Row, Well } from 'react-bootstrap';

class AccountPreferences extends React.Component {
  constructor(props) {
    super(props);
    this._deleteAccount = this._deleteAccount.bind(this);
  }
  _deleteAccount() {
    const { deleteAccount } = this.props;
    deleteAccount();
  }
  render() {
    const { user } = this.props;
    return (
      <AuthEnsureUser>
        <Row>
          <Col sm={12}>
            <ul className="userInfo">
              <li id="email">Email: {user.email}</li>
              <li id="username">Username: {user.username}</li>
              <li id="id">ID: {user.id}</li>
            </ul>
            <Well>
              <p>For testing purposes: </p>
              <Button bsStyle="danger" onClick={this._deleteAccount}>Delete account</Button>
            </Well>
          </Col>
        </Row>
      </AuthEnsureUser>
    );
  }
}

export default AccountPreferences;

AccountPreferences.propTypes = {
  deleteAccount: React.PropTypes.func,
  user: React.PropTypes.object,
};
