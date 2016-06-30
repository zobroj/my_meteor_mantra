import React from 'react';
import { mount } from 'react-mounter';

// Define a layout from the shared components
import {
  LayoutList,
} from '/client/configs/components.js';

import FoobarList from './containers/foobar_list';

export default function ( injectDeps, { FlowRouter } ) {

  const LayoutListCtx = injectDeps( LayoutList );

  FlowRouter.route('/foobar', {
    name: 'foobars.route',
    action() {
      mount( LayoutListCtx, {
        content: () => ( <FoobarList /> )
      });
    }
  });

}
