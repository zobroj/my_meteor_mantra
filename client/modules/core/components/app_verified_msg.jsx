import React from 'react'

class AppVerifiedMsg extends React.Component {

  displayPendingUser() {
    return (
      <div clasName="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="alert alert-danger">
              <p><strong>Please verify your email to continue. </strong>
              <a onClick={ this._resendVerificationEmail.bind( this ) } href="#">Resend verification link</a></p>
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

  _resendVerificationEmail( event ) {
    event.preventDefault()
    const { resendVerificationEmail } = this.props
    resendVerificationEmail()
  }
}

export default AppVerifiedMsg
