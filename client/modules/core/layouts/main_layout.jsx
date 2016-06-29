import React from 'react';

import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';

class MainLayout extends React.Component {

  render() {

    const { content = () => null } = this.props

    return (
      <div>
        <NavbarMain />
        { content() }
        <hr />
        <Footer />
      </div>
    )
  }
}

export default MainLayout;
