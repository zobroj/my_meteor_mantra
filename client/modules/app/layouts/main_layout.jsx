import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const MainLayout = ( { content } ) => (
  <div>
    <Navbar />
    { content }
    <hr />
    <Footer />
  </div>
);

export default MainLayout;
