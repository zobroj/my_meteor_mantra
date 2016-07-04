import React from 'react'
import NavbarMain from '../containers/navbar_main'
import Footer from '../components/footer'
import { AppVerifiedMsg } from '/client/configs/components'
import { Grid } from 'react-bootstrap'

const LayoutList = ( { content = () => null, loggedIn, emailVerified } ) => (
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

export default LayoutList
