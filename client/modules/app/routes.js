import React from 'react';
import { mount } from 'react-mounter';

import {
  SplitLayout,
} from '/client/configs/components';

import AccountRegister from './containers/account_register';
import AccountLogin from './containers/account_login';

export default function ( injectDeps, { FlowRouter } ) {

  const SplitLayoutCtx = injectDeps ( SplitLayout );

  FlowRouter.route( '/register', {
    name: "accounts.register",
    action() {
      mount( SplitLayoutCtx, {
        content: () => ( <AccountRegister /> ),
      });
    }
  });

  FlowRouter.route( '/login', {
    name: "accounts.login",
    action() {
      mount( SplitLayoutCtx, {
        content: () => ( <AccountLogin /> ),
      });
    }
  });
}
