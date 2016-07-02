import React from 'react'
import {
  Grid,
} from 'react-bootstrap'
import {
  NavbarMain,
  Footer,
  AppVerifiedMsg,
} from '/client/configs/components'

class LayoutMain extends React.Component {
  render() {
    const {
      jumbotron = () => null,
      content = () => null,
      emailVerified,
      loggedIn
    } = this.props
    return (
      <div>
        <NavbarMain />
        <AppVerifiedMsg
          loggedIn={ loggedIn }
          emailVerified={ emailVerified }
        />
        { jumbotron() }
        { content() }
        <hr />
        <Footer />
      </div>
    )
  }
}

export default LayoutMain
