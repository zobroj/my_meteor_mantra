import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '/client/configs/components.js';

import CommentBox from './comment_box';


export default function ( injectDeps, { FlowRouter } ) {
  const MainLayoutCtx = injectDeps( MainLayout );

  FlowRouter.route( '/dev', {
    name: "dev",
    action() {
      mount( MainLayoutCtx, {
        content: <CommentBox />
      });
    }
  });
}
