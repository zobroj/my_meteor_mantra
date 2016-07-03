import React from 'react'
import AccountNotLoggedIn from './account_not_logged_in'
import { AppLoading } from '/client/configs/components'
import {
  Button,
  Col,
  Row,
  Well,
} from 'react-bootstrap'

class AccountPreferences extends React.Component {
  constructor( props ) {
    super( props )
    this._deleteAccount = this._deleteAccount.bind( this )
  }
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
            <Button bsStyle="danger" onClick={ this._deleteAccount }>Delete account</Button>
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
