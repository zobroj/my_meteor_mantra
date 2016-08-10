import React from 'react';
import NavbarUser from '../components/navbar_user';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { isActiveRoute } from '../lib/helpers.js';

const NavbarMain = ({ logout, user }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">My Meteor Mantra</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem
          eventKey={1}
          className={isActiveRoute('posts')}
          href="/post"
        >Posts</NavItem>
      </Nav>
      <NavbarUser
        logout={logout}
        user={user}
      />
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarMain;

NavbarMain.propTypes = {
  logout: React.PropTypes.func,
  user: React.PropTypes.object,
};
