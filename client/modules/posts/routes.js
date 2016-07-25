import React from 'react';
import { mount } from 'react-mounter';
import { LayoutList } from '/client/configs/components';
import PostList from './containers/post_list';
import PostSingle from './containers/post_single';

export default function (injectDeps, { FlowRouter }) {
  const LayoutListCtx = injectDeps(LayoutList);

  // Overview of all conversations
  FlowRouter.route('/post', {
    name: 'posts.list',
    action() {
      mount(LayoutListCtx, {
        content: ({ loggedIn, loggingIn, emailVerified }) => (<PostList
          loggedIn={loggedIn}
          loggingIn={loggingIn}
          emailVerified={emailVerified}
        />),
      });
    },
  });
  // Single conversation view
  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({ postId }) {
      mount(LayoutListCtx, {
        content: ({ loggedIn, loggingIn, emailVerified }) => (<PostSingle
          postId={postId}
          loggedIn={loggedIn}
          loggingIn={loggingIn}
          emailVerified={emailVerified}
        />),
      });
    },
  });
}
