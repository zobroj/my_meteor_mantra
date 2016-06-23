import React from 'react'
import AccountLoggedIn  from './account_logged_in'

class AccountLogin extends React.Component {

  displayUser() {
    return(
      <AccountLoggedIn />
    )
  }

  displayGuest() {

    const { error } = this.props

    return (
      <form id="login-form" onSubmit={ this._login.bind( this ) }>
        { error ? <p style={ { color: 'red' } }>{ error }</p> : null }
        <h3>Log In to Your Account</h3>
        <div className="form-group">
          <label for="email">Email Address</label>
          <input type="email" ref="email" />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" ref="password" />
        </div>
        <input type="submit" className="btn btn-success" value="Log In" />
      </form>
    )
  }

  displayLoading() {
    return(
      <div>Loading...</div>
    )
  }

  render() {
    const { loggedIn, loggingIn } = this.props

    return (
      <div>
      {
        loggedIn ? this.displayUser() : this.displayGuest()
      }
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
