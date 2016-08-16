import React from 'react';
import {AuthEnsureUser} from '/client/configs/components';
import {MenuItem, Nav, NavDropdown} from 'react-bootstrap';
import NavbarGuest from './navbar_guest';

class NavbarUser extends React.Component {
  constructor(props) {
    super(props);
    this._logout = this._logout.bind(this);
  }
  _logout() {
    const { logout } = this.props;
    logout();
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
            href={`/user/${user.username}/preferences`}
          >Preferences</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
  render() {
    return (
      <AuthEnsureUser
        guestMessage={<NavbarGuest />}
        unverifiedMessage={this.displayUser()}
      >{this.displayUser()}</AuthEnsureUser>
    );
  }
}

export default NavbarUser;

NavbarUser.propTypes = {
  logout: React.PropTypes.func,
  user: React.PropTypes.object,
};
