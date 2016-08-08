import React from 'react';
import NavbarUser from '../containers/navbar_user';
import { isActiveRoute } from '../lib/helpers';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const NavbarMain = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href={FlowRouter.path('/')}>My Meteor Mantra</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem
          eventKey={1}
          className={isActiveRoute('posts')}
          href={FlowRouter.path('posts.list')}
        >Posts</NavItem>
      </Nav>
      <NavbarUser />
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarMain;
