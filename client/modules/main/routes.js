import React from 'react';
import { mount } from 'react-mounter';
import LayoutMain from './containers/layout_main';
import JumboGuest from './components/jumbo_guest'
import SummaryGuest from './components/summary_guest'


export default function ( injectDeps, { FlowRouter } ) {

  const LayoutMainCtx = injectDeps( LayoutMain );

  // Introduction to website
  FlowRouter.route( '/', {
    name: "main",
    action() {
      mount( LayoutMainCtx, {
        jumbotron: () => ( <JumboGuest /> ),
        content: () => ( <SummaryGuest /> ),
      });
    }
  });

}
