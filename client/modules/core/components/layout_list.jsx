import React from 'react'
import NavbarMain from '../containers/navbar_main'
import Footer from '../components/footer'
import { AppVerifiedMsg } from '/client/configs/components'
import { Grid } from 'react-bootstrap'

class LayoutList extends React.Component {
  render() {
    const { content = () => null, emailVerified, loggedIn } = this.props
    return (
      <div>
        <NavbarMain />
        <AppVerifiedMsg loggedIn={ loggedIn } emailVerified={ emailVerified }/>
        <Grid>
          { content() }
        </Grid>
        <hr />
        <Footer />
      </div>
    )
  }
}

export default LayoutList
