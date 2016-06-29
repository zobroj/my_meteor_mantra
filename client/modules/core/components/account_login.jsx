import React from 'react'
import AccountLoggedIn from './account_logged_in'
import { AppLoading } from '/client/configs/components'

class AccountLogin extends React.Component {

  displayUser() {
    return(
      <AccountLoggedIn />
    )
  }
  displayLoading() {
    return(
      <AppLoading />
    )
  }

  displayGuest() {

    const { error } = this.props

    return (
      <form role="form" id="login-form" onSubmit={ this._login.bind( this ) }>
        { error ? <p style={ { color: 'red' } }>{ error }</p> : null }
        <h3>Log In to Your Account</h3>
        <div className="form-group">
          <label for="email">Email Address</label>
          <input className="form-control" type="email" ref="email" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input className="form-control" type="password" ref="password" placeholder="Enter password"/>
        </div>
        <button type="submit" className="btn btn-default">Log In</button>
      </form>
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

  _login( event ) {
    event.preventDefault()
    const { login } = this.props
    const { email, password } = this.refs
    login( email.value, password.value )
  }

}

export default AccountLogin
