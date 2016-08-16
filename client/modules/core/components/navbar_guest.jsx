import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const NavbarGuest = () => (
  <Nav pullRight>
    <NavItem eventKey={1} href="/login">LOGIN</NavItem>
    <NavItem eventKey={2} href="/signup">SIGN UP</NavItem>
  </Nav>
);

export default NavbarGuest;
