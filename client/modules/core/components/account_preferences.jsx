import React from 'react'
import AccountNotLoggedIn from './account_not_logged_in'
import { AppLoading } from '/client/configs/components'
import {
  Row,
  Col,
  Well,
  Button,
} from 'react-bootstrap'

class AccountPreferences extends React.Component {
  displayUser() {
    const { email, username } = this.props
    return (
      <Row>
        <Col sm={12}>
          <ul>
            <li>Email: {email}</li>
            <li>Username: {username}</li>
          </ul>
          <Well>
            <p>For testing purposes: </p>
            <Button bsStyle="danger" onClick={ this._deleteAccount.bind( this ) }>Delete account</Button>
          </Well>
        </Col>
      </Row>
    )
  }

  displayLoading() {
    return (
      <AppLoading />
    )
  }

  displayGuest() {
    return (
      <AccountNotLoggedIn />
    )
  }

  render() {
    const { loggedIn, loggingIn } = this.props
    if ( loggingIn ) { return this.displayLoading() }
    if ( loggedIn ) {
      return this.displayUser()
    } else {
      return this.displayGuest()
    }
  }

  _deleteAccount( event ) {
    event.preventDefault()
    const{ deleteAccount } = this.props
    deleteAccount()
  }
}

export default AccountPreferences
