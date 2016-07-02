import React from 'react';

import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';
import { AppVerifiedMsg } from '/client/configs/components'

class LayoutSplit extends React.Component {

  render() {

    const { content = () => null, emailVerified, loggedIn } = this.props

    return (
      <div>
        <NavbarMain />
        <AppVerifiedMsg loggedIn={ loggedIn } emailVerified={ emailVerified }/>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3>Why hello there.</h3>
            </div>
            <div className="col-sm-6">
              { content() }
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    )
  }
}

export default LayoutSplit;
