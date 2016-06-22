import React from 'react';

import Navbar from '../containers/navbar';
import Footer from '../components/footer';

const MainLayout = ( { content } ) => (
  <div>
    <Navbar />
    <div className="container">
      { content }
    </div>
    <hr />
    <Footer />
  </div>
);

export default MainLayout;
