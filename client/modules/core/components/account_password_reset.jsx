import React from 'react';
import AccountLoggedIn from './account_logged_in';
import { AppLoading } from '/client/configs/components';
import { Button, ControlLabel, FormGroup, FormControl, Panel } from 'react-bootstrap';

class AccountPasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: '',
      password2: '',
    };
    this.handlePassword1Change = this.handlePassword1Change.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
    this._resetPassword = this._resetPassword.bind(this);
  }
  handlePassword1Change(event) {
    this.setState({ password1: event.target.value });
  }
  handlePassword2Change(event) {
    this.setState({ password2: event.target.value });
  }
  displayUser() {
    return (
      <AccountLoggedIn />
    );
  }
  displayLoading() {
    return (
      <AppLoading />
    );
  }
  displayGuest() {
    const { error } = this.props;
    return (
      <form onSubmit={this._resetPassword}>
        {error ? <p style={{ color: 'red' }}>{error}</p> : null}
        <FormGroup>
          <ControlLabel>New Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Enter password"
            value={this.state.password1}
            onChange={this.handlePassword1Change}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Repeat Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Enter password again"
            value={this.state.pasword2}
            onChange={this.handlePassword2Change}
          />
        </FormGroup>
        <Button bsStyle="primary" type="submit">Submit</Button>
      </form>
    );
  }
  _resetPassword(event) {
    event.preventDefault();
    const { token, resetPassword } = this.props;
    const { password1, password2 } = this.state;
    resetPassword(token, password1, password2);
  }
  render() {
    const { loggedIn, loggingIn } = this.props;
    if (loggingIn) { return this.displayLoading(); }
    return (
      <Panel header="Change your password" >
        {loggedIn ? this.displayUser() : this.displayGuest()}
      </Panel>
    );
  }
}

export default AccountPasswordReset;

AccountPasswordReset.propTypes = {
  error: React.PropTypes.string,
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  token: React.PropTypes.string,
  resetPassword: React.PropTypes.func,
};
