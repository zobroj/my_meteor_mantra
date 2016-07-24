import React from 'react';
import { AppLoading } from '/client/configs/components';
import { MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';

class NavbarUser extends React.Component {
  constructor(props) {
    super(props);
    this._logout = this._logout.bind(this);
  }
  displayUser() {
    const { email, username } = this.props;
    return (
      <Nav pullRight>
        <NavDropdown eventKey={1} title={email} id="navbar-user-dropdown">
          <MenuItem eventKey={1.1} onClick={this._logout}>Log Out</MenuItem>
          <MenuItem divider />
          <MenuItem
            eventKey={1.2}
            href={FlowRouter.path(`/user/${username}/preferences`)}
          >Preferences</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
  displayGuest() {
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="/login">LOGIN</NavItem>
        <NavItem eventKey={2} href="/register">SIGN UP</NavItem>
      </Nav>
    );
  }
  displayLoading() {
    return (
      <AppLoading />
    );
  }
  _logout(event) {
    event.preventDefault();
    const { logout } = this.props;
    logout();
  }
  render() {
    const { loggedIn, loggingIn } = this.props;
    if (loggingIn) { return this.displayLoading(); }
    if (loggedIn) { return this.displayUser(); }
    return this.displayGuest();
  }
}

export default NavbarUser;

NavbarUser.propTypes = {
  email: React.PropTypes.string,
  username: React.PropTypes.string,
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  logout: React.PropTypes.func,
};
