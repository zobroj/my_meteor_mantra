import React from 'react'

class AppVerifiedMsg extends React.Component {

  displayPendingUser() {
    return (
      <div clasName="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="alert alert-danger">
              <strong>Please verify your email to continue.</strong>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {

    const { loggedIn, emailVerified } = this.props

    if ( loggedIn && !emailVerified ) {
        return ( this.displayPendingUser() )
    } else {
        return ( <div></div> )
    }
  }
}

export default AppVerifiedMsg
