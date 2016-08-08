import React from 'react';
import { AuthCheck } from '/client/configs/components';
import { MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';

class NavbarUser extends React.Component {
  constructor(props) {
    super(props);
    this._logout = this._logout.bind(this);
  }
  _logout(event) {
    event.preventDefault();
    const { logout } = this.props;
    logout();
  }
  displayGuest() {
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="/login">LOGIN</NavItem>
        <NavItem eventKey={2} href="/register">SIGN UP</NavItem>
      </Nav>
    );
  }
  displayUser() {
    const { user } = this.props;
    return (
      <Nav pullRight>
        <NavDropdown eventKey={1} title={user.username} id="navbar-user-dropdown">
          <MenuItem eventKey={1.1} onClick={this._logout}>Log Out</MenuItem>
          <MenuItem divider />
          <MenuItem
            eventKey={1.2}
            href={FlowRouter.path(`/user/${user.username}/preferences`)}
          >Preferences</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
  render() {
    return (
      <AuthCheck
        guestMessage={this.displayGuest()} unverifiedMessage={this.displayUser()}
      >{this.displayUser()}</AuthCheck>
    );
  }
}

export default NavbarUser;

NavbarUser.propTypes = {
  logout: React.PropTypes.func,
  user: React.PropTypes.object,
};
