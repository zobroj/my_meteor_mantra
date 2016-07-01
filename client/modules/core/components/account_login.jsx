import React from 'react'
import AccountLoggedIn from './account_logged_in'
import { AppLoading } from '/client/configs/components'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap'

class AccountLogin extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmailChange( event ) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange( event ) {
    this.setState({ password: event.target.value })
  }

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
      <form onSubmit={ this._login.bind( this ) }>
        { error ? <p style={ { color: 'red' } }>{ error }</p> : null }
        <h3>Log In to Your Account</h3>
        <FormGroup>
          <ControlLabel>Email Address</ControlLabel>
          <FormControl
            type="email"
            placeholder="Enter email"
            value={ this.state.email }
            onChange={ this.handleEmailChange.bind( this ) }
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Enter password"
            value={ this.state.pasword }
            onChange={ this.handlePasswordChange.bind( this ) }
          />
        </FormGroup>
        <Button type="submit" >Log In</Button>
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
    const { email, password } = this.state
    login( email, password )
  }

}

export default AccountLogin
