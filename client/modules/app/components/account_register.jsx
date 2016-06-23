import React from 'react'

class AccountRegister extends React.Component {

  displayUser() {
    return(
      <div>You're logged in already!</div>
    )
  }

  displayGuest() {

    const { error } = this.props

    return(
      <form id="register-form" onSubmit={ this._register.bind( this ) }>
        { error ? <p style={ { color: 'red' } }>{ error }</p> : null }
        <h3>Create a New Account</h3>
        <div className="form-group">
          <label for="email">Email Address</label>
          <input type="email" ref="email" />
        </div>
        <div className="form-group">
          <label for="password1">Password</label>
          <input type="password" ref="password1" />
        </div>
        <div className="form-group">
          <label for="password1">Password Again</label>
          <input type="password" ref="password2" />
        </div>
        <input type="submit" className="btn btn-success" value="Create" />
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

    if ( loggingIn ) {
      return this.displayLoading()
    }

    return loggedIn ? this.displayUser() : this.displayGuest()
  }

  _register( event ) {
    event.preventDefault()
    const { register } = this.props
    const { email, password1, password2 } = this.refs
    register( email.value, password1.value, password2.value )
  }

}

export default AccountRegister
