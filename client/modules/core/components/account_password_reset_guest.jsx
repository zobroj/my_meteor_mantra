import React from 'react';
import {AppErrorMsg} from '/client/configs/components';
import { Button, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

class AccountPasswordResetGuest extends React.Component {
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
  _resetPassword(event) {
    event.preventDefault();
    const { token, resetPassword } = this.props;
    const { password1, password2 } = this.state;
    resetPassword(token, password1, password2);
  }
  render() {
    const { error } = this.props;
    return (
      <form id="password-reset" onSubmit={this._resetPassword}>
        <AppErrorMsg error={error} />
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
}

export default AccountPasswordResetGuest;

AccountPasswordResetGuest.propTypes = {
  error: React.PropTypes.string,
  token: React.PropTypes.string,
  resetPassword: React.PropTypes.func,
};
