import React from 'react'
import { mount } from 'react-mounter'

// Define a layout from the shared components
import {
  LayoutList,
} from '/client/configs/components.js'

import BootstrapExamples from './containers/react_bootstrap'

export default function ( injectDeps, { FlowRouter } ) {

  const LayoutListCtx = injectDeps( LayoutList )

  FlowRouter.route('/reactbootstrap', {
    name: 'reactbootstrap.examples',
    action() {
      mount( LayoutListCtx, {
        content: () => ( <BootstrapExamples /> )
      })
    }
  })
}
