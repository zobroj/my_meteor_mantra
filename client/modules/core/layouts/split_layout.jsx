import React from 'react';

import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';

const SplitLayout = ( { content = () => null } ) => (
  <div>
    <NavbarMain />
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
);

export default SplitLayout;
