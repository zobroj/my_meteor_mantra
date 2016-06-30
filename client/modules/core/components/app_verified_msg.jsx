import React from 'react'

class AppVerifiedMsg extends React.Component {

  displayPendingUser() {
    return (
      <div clasName="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="alert alert-danger">
              <p><strong>Please verify your email to continue. </strong>
              <a onClick={ this._sendVerificationEmail.bind( this ) } href="#">Resend verification link</a></p>
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

  _sendVerificationEmail( event ) {
    event.preventDefault()
    const { sendVerificationEmail } = this.props
    sendVerificationEmail()
  }
}

export default AppVerifiedMsg
