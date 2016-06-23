import React from 'react'

class AccountLogin extends React.Component {
  render() {

    const { error, loggedIn, loggingIn } = this.props

    const loginUser = () => (
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

    const existingUser = () => (
      <div>
        You're logged in already!
      </div>
    )

    return(
      <div>
      {
        loggedIn ? existingUser() :
        loggingIn ? <div>Loading...</div> : loginUser()
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
