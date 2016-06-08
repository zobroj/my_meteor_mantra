import React from 'react';

const MainLayout = ( { header, content, footer } ) => (
  <div>
    { header }
    { content }
    <hr />
    { footer }
  </div>
);

export default MainLayout;
