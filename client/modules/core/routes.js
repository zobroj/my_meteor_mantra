import React from 'react';
import { mount } from 'react-mounter';
import { LayoutSplit, LayoutList, AppNotFound } from '/client/configs/components';
import AccountSignupMain from './components/account_signup_main';
import AccountLogin from './containers/account_login';
import AccountPasswordResetMain from './components/account_password_reset_main';
import AccountPreferences from './containers/account_preferences';

export default function (injectDeps, { FlowRouter }) {
  const LayoutSplitCtx = injectDeps(LayoutSplit);
  const LayoutListCtx = injectDeps(LayoutList);

  FlowRouter.route('/signup', {
    name: 'accounts.signup',
    action() {
      mount(LayoutSplitCtx, {
        content: () => (<AccountSignupMain />),
      });
    },
  });

  FlowRouter.route('/login', {
    name: 'accounts.login',
    action() {
      mount(LayoutSplitCtx, {
        content: () => (<AccountLogin />),
      });
    },
  });

  FlowRouter.route('/user/:username/preferences', {
    name: 'accounts.preferences',
    action() {
      mount(LayoutListCtx, {
        content: () => (<AccountPreferences />),
      });
    },
  });
  FlowRouter.route('/verify-email/:token', {
    name: 'verify-email',
    action(params) {
      Accounts.verifyEmail(params.token, (error) => {
        if (error) {
          // Bert.alert( error.reason, 'danger' )
        } else {
          FlowRouter.go('/');
          // Bert.alert( 'Email verfied! Thanks!', 'success' )
        }
      });
    },
  });
  FlowRouter.route('/reset-password/:token', {
    name: 'reset-password',
    action(params) {
      mount(LayoutListCtx, {
        content: () => (<AccountPasswordResetMain token={params.token} />),
      });
    },
  });
  /* eslint-disable no-param-reassign */
  FlowRouter.notFound = {
    name: 'app.notFound',
    action() {
      mount(LayoutListCtx, {
        content: () => (<AppNotFound />),
      });
    },
  };
}
