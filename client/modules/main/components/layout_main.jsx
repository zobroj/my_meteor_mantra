import React from 'react'
import {
  AppVerifiedMsg,
  Footer,
  NavbarMain,
} from '/client/configs/components'
import {
  Grid,
} from 'react-bootstrap'

const LayoutMain = ({ jumbotron = () => null, content = () => null, emailVerified, loggedIn }) => (
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

export default LayoutMain
