import React from 'react'

class AppVerifiedMsg extends React.Component {
  constructor( props ) {
    super( props )
    // initial state
    this.state = {
      resendLinkClicked: false
    }
  }

  displayPendingUser() {
    return (
      <div clasName="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="alert alert-danger">
              { this.linkAvailability() }
            </div>
          </div>
        </div>
      </div>
    )
  }

  linkAvailability() {

    const canSendLink = () => {
      return (
        <p><strong>Please verify your email to continue. </strong>
        <a onClick={ this._resendVerificationEmail.bind( this ) } href="#">Resend verification link</a></p>
      )
    }

    const mustWait = () => {
      return (
        <div>Check your email. Link has been set. You can resend in 60 seconds.</div>
      )
    }

    // setTimeout( () => { return canSendLink() }, 600)
    let emailSent = this.state.resendLinkClicked
    console.log('emailsent? ' + emailSent)
    if ( emailSent ) {
      return mustWait()
    } else {
      return canSendLink()
    }

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

    this.setState({ resendLinkClicked: true })
    resendVerificationEmail()

    // user can click link after 60 seconds
    const resetState = () => {
      this.setState({ resendLinkClicked: false })
      console.log( this.state.resendLinkClicked )
    }
    setTimeout( resetState, 60000 )

  }
}

export default AppVerifiedMsg
