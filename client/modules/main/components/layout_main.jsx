import React from 'react'
import {
  AppVerifiedMsg,
  Footer,
  NavbarMain,
} from '/client/configs/components'
import {
  Grid,
} from 'react-bootstrap'

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
