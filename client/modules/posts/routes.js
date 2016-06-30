import React from 'react';
import { mount } from 'react-mounter';

import {
  LayoutList,
  AppNotFound,
} from '/client/configs/components';

import PostList from './containers/post_list';
import PostSingle from './containers/post_single';

export default function ( injectDeps, { FlowRouter } ) {

  const LayoutListCtx = injectDeps( LayoutList );

  // Overview of all conversations
  FlowRouter.route( '/post', {
    name: "posts.list",
    action() {
      mount( LayoutListCtx, {
        content: () => ( <PostList /> ),
      });
    }
  });

  // Single conversation view
  FlowRouter.route( '/post/:postId', {
    name: "posts.single",
    action( { postId } ) {
      mount( LayoutListCtx, {
        content: ()=> ( <PostSingle postId={ postId } /> ),
      });
    }
  });

}
