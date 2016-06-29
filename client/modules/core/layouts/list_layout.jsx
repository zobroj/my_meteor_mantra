import React from 'react';

import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';

class ListLayout extends React.Component {

  render() {

    const { content = () => null } = this.props

    return (
      <div>
        <NavbarMain />
        <div className="container">
        { content() }
        </div>
        <hr />
        <Footer />
      </div>
    )
  }
}

export default ListLayout;
