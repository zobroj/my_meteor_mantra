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

class AccountLogin extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      email: '',
      password: '',
      resetEmail: '',
    }
  }
  handleEmailChange( event ) {
    this.setState({ email: event.target.value })
  }
  handlePasswordChange( event ) {
    this.setState({ password: event.target.value })
  }
  handleResetEmailChange( event ) {
    this.setState({ resetEmail: event.target.value })
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
        <Button bsStyle="primary" type="submit" >Log In</Button>
      </form>
    )
  }
  render() {
    const { loggedIn, loggingIn } = this.props
    // testing for modal
    const { error } = this.props
    // tetsing for modal
    const footerText = () => (
      <p>Forgot your pasword? <a onClick={ this._forgotPassword.bind( this ) } href="#">Reset it here.</a></p>
    )
    if ( loggingIn ) { return this.displayLoading() }
    return (
      <div>
      <Panel
        header="Log In to Your Account"
        footer={ footerText() }>
        { loggedIn ? this.displayUser() : this.displayGuest() }
      </Panel>
        <div className="static-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Send Reset Password Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Enter the email address for your account</p>
              <form >
                { error ? <p style={ { color: 'red' } }>{ error }</p> : null }
                <FormGroup>
                  <FormControl
                    type="email"
                    placeholder="Enter email"
                    value={ this.state.resetEmail }
                    onChange={ this.handleResetEmailChange.bind( this ) }
                  />
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button>Close</Button>
              <Button onClick={ this._resetPassword.bind( this ) } bsStyle="primary">Reset Password</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    )
  }
  _login( event ) {
    event.preventDefault()
    const { login } = this.props
    const { email, password } = this.state
    login( email, password )
  }
  _forgotPassword( event ) {
    event.preventDefault()
    console.log( 'yes, you clicked it!')
  }
  _resetPassword( event ) {
    event.preventDefault()
    const { sendResetPasswordLink } = this.props
    const { resetEmail } = this.state
    console.log( `jsx send reset email link to ${resetEmail}` )
    sendResetPasswordLink( resetEmail )
  }
}

export default AccountLogin
