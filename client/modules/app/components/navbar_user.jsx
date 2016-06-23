import React from 'react';

class NavbarUser extends React.Component {
  render() {
    
    const { email } = this.props

    return(
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ email }<span className="caret"></span></a>
        <ul className="dropdown-menu">
            <li><a onClick={ this._logout.bind( this ) } href="#">Log Out</a></li>
          </ul>
      </li>
    )

  }

  _logout( event ) {
    event.preventDefault()
    const { logout } = this.props
    logout()
  }

}

export default NavbarUser
