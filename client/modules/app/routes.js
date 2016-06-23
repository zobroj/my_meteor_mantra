import React from 'react';
import { mount } from 'react-mounter';

import {
  ListLayout,
} from '/client/configs/components';

import AccountRegister from './containers/account_register';
import AccountLogin from './containers/account_login';

export default function ( injectDeps, { FlowRouter } ) {

  const LayoutCtx = injectDeps ( ListLayout );

  FlowRouter.route( '/register', {
    name: "accounts.register",
    action() {
      mount( LayoutCtx, {
        content: () => ( <AccountRegister /> ),
      });
    }
  });

  FlowRouter.route( '/login', {
    name: "accounts.login",
    action() {
      mount( LayoutCtx, {
        content: () => ( <AccountLogin /> ),
      });
    }
  });
}
