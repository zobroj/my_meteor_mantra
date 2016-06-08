import React from 'react';
import { mount } from 'react-mounter';

import {
  MainLayout,
  Navbar,
  Footer,
} from '/client/configs/components.js';

import MainPage from './containers/main_page';

export default function ( injectDeps, { FlowRouter } ) {

  const MainLayoutCtx = injectDeps( MainLayout );

  // Introduction to website
  FlowRouter.route( '/', {
    name: "main",
    action() {
      mount( MainLayoutCtx, {
        header: <Navbar activeLink="main" />,
        content: <MainPage />,
        footer: <Footer />,
      });
    }
  });

}
