import React from 'react'
import AccountLoggedIn from './account_logged_in'
import { AppLoading } from '/client/configs/components'
import {
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Modal,
} from 'react-bootstrap'

class AccountPasswordReset extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      password1: '',
      password2: '',
    }
  }
  handlePassword1Change( event ) {
    this.setState({ password1: event.target.value })
  }
  handlePassword2Change( event ) {
    this.setState({ password2: event.target.value })
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
      <form onSubmit={ this._resetPassword.bind( this ) }>
        { error ? <p style={ { color: 'red' } }>{ error }</p> : null }
        <FormGroup>
          <ControlLabel>New Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Enter password"
            value={ this.state.password1 }
            onChange={ this.handlePassword1Change.bind( this ) }
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Repeat Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Enter password again"
            value={ this.state.pasword2 }
            onChange={ this.handlePassword2Change.bind( this ) }
          />
        </FormGroup>
        <Button bsStyle="primary" type="submit">Submit</Button>
      </form>
    )
  }
  render() {
    const { loggedIn, loggingIn, token } = this.props
    if ( loggingIn ) { return this.displayLoading() }
    return (
      <Panel header="Change your password" >
        { loggedIn ? this.displayUser() : this.displayGuest() }
      </Panel>
    )
  }
  _resetPassword( event ) {
    event.preventDefault()
    const { token, resetPassword } = this.props
    const { password1, password2 } = this.state
    resetPassword( token, password1, password2 )
  }
}

export default AccountPasswordReset
