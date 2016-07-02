import React from 'react';
import { mount } from 'react-mounter';
import MainPage from './containers/main_page';
import LayoutMain from './components/layout_main';

export default function ( injectDeps, { FlowRouter } ) {

  const LayoutMainCtx = injectDeps( LayoutMain );

  // Introduction to website
  FlowRouter.route( '/', {
    name: "main",
    action() {
      mount( LayoutMainCtx, {
        // header: <Navbar activeLink="main" />,
        content: () => ( <MainPage /> ),
      });
    }
  });

}
