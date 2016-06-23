import React from 'react'
import AppLoading from './app_loading'

class NavbarUser extends React.Component {

  displayUser() {
    const { email } = this.props

    return(
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ email }<span className="caret"></span></a>
          <ul className="dropdown-menu">
              <li><a onClick={ this._logout.bind( this ) } href="#">Log Out</a></li>
            </ul>
        </li>
      </ul>
    )
  }

  displayGuest() {
    return(
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/login">LOGIN</a></li>
        <li><a href="/register">SIGN UP</a></li>
      </ul>
    )
  }

  displayLoading() {
    return(
      <AppLoading />
    )
  }

  render() {
    const { loggedIn, loggingIn } = this.props

    if ( loggingIn ) { return this.displayLoading() }

    return (
      <div>
      { loggedIn ? this.displayUser() : this.displayGuest() }
      </div>
    )
  }

  _logout( event ) {
    event.preventDefault()
    const { logout } = this.props
    logout()
  }
}

export default NavbarUser
