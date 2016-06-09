import React from 'react';
import { mount } from 'react-mounter';

import {
  ListLayout,
} from '/client/configs/components.js';

import PostList from './containers/post_list';
import PostSingle from './containers/post_single';

export default function ( injectDeps, { FlowRouter } ) {

  const ListLayoutCtx = injectDeps( ListLayout );

  // Overview of all conversations
  FlowRouter.route( '/post', {
    name: "posts.list",
    action() {
      mount( ListLayoutCtx, {
        // header: <Navbar activeLink="post" />,
        content: <PostList />,
      });
    }
  });

  // Single conversation view
  FlowRouter.route( '/post/:postId', {
    name: "posts.single",
    action( { postId } ) {
      mount( ListLayoutCtx, {
        // header: <Navbar activeLink="post" />,
        content: <PostSingle postId={ postId } />,
      });
    }
  });

}
