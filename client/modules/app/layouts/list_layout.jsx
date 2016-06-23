import React from 'react';

import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';

const MainLayout = ( { content = () => null } ) => (
  <div>
    <NavbarMain />
    <div className="container">
      { content() }
    </div>
    <hr />
    <Footer />
  </div>
);

export default MainLayout;
