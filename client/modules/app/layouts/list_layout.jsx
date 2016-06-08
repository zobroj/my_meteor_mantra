import React from 'react';

const MainLayout = ( { header, content, footer } ) => (
  <div>
    { header }
    <div className="container">
      { content }
    </div>
    <hr />
    { footer }
  </div>
);

export default MainLayout;
