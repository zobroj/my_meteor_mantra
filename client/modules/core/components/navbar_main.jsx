import React from 'react';
import NavbarUser from './navbar_user';
import { isActiveRoute } from '../libs/helpers'
import {
  Nav,
  Navbar,
  NavItem,
  Button,
} from 'react-bootstrap'

class NavbarMain extends React.Component {
  render() {
    const { loggedIn, loggingIn, logout, email, username } = this.props
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={ FlowRouter.path( '/' ) }>My Meteor Mantra</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}
              className={ isActiveRoute( 'posts' ) }
              href={ FlowRouter.path( 'posts.list' ) }>Posts
            </NavItem>
          </Nav>
          <NavbarUser
            email={ email }
            username={ username }
            loggingIn={ loggingIn }
            loggedIn={ loggedIn }
            logout={ logout }
          />
        </Navbar.Collapse>
      </Navbar>
    )

  }
}

export default NavbarMain
