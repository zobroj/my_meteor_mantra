import React from 'react'

import NavbarMain from '../containers/navbar_main'
import Footer from '../components/footer'
import AppVerifiedMsg from '../components/app_verified_msg'

class LayoutMain extends React.Component {

  render() {

    const { content = () => null, emailVerified, loggedIn } = this.props

    return (
      <div>
        <NavbarMain />
        <AppVerifiedMsg loggedIn={ loggedIn } emailVerified={ emailVerified }/>
        { content() }
        <hr />
        <Footer />
      </div>
    )
  }
}

export default LayoutMain
