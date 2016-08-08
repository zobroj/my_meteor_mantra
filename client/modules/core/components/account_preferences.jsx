import React from 'react';
import { AuthCheck } from '/client/configs/components';
import { Button, Col, Row, Well } from 'react-bootstrap';

class AccountPreferences extends React.Component {
  constructor(props) {
    super(props);
    this._deleteAccount = this._deleteAccount.bind(this);
  }
  _deleteAccount(event) {
    event.preventDefault();
    const { deleteAccount } = this.props;
    deleteAccount();
  }
  render() {
    const { user } = this.props;
    return (
      <AuthCheck>
        <Row>
          <Col sm={12}>
            <ul>
              <li>Email: {user.email}</li>
              <li>Username: {user.username}</li>
              <li>ID: {user.id}</li>
            </ul>
            <Well>
              <p>For testing purposes: </p>
              <Button bsStyle="danger" onClick={this._deleteAccount}>Delete account</Button>
            </Well>
          </Col>
        </Row>
      </AuthCheck>
    );
  }
}

export default AccountPreferences;

AccountPreferences.propTypes = {
  deleteAccount: React.PropTypes.func,
  user: React.PropTypes.object,
};
