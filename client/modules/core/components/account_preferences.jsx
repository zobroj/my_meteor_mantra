import React from 'react'
import AccountNotLoggedIn from './account_not_logged_in'
import { AppLoading } from '/client/configs/components'

class AccountPreferences extends React.Component {

  displayUser() {

    const { email, username } = this.props

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul>
              <li>Email: {email}</li>
              <li>Username: {username}</li>
            </ul>
            <div className="well">
              <p>For testing purposes: </p>
              <button onClick={ this._deleteAccount.bind( this ) } className="btn btn-warning">Delete account</button>
            </div>
          </div>
        </div>
      </div>
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

    return (
      <div>
      { loggedIn ? this.displayUser() : this.displayGuest() }
      </div>
    )
  }

  _deleteAccount( event ) {
    event.preventDefault()
    const{ deleteAccount } = this.props
    deleteAccount()
  }

}

export default AccountPreferences
