import React from 'react';
import { mount } from 'react-mounter'

import {
  MainLayout,
  SplitLayout,
} from '/client/configs/components'
import AppNotFound from './components/app_not_found'

import AccountRegister from './containers/account_register'
import AccountLogin from './containers/account_login'

export default function ( injectDeps, { FlowRouter } ) {

  const MainLayoutCtx = injectDeps ( MainLayout )
  const SplitLayoutCtx = injectDeps ( SplitLayout )

  FlowRouter.route( '/register', {
    name: "accounts.register",
    action() {
      mount( SplitLayoutCtx, {
        content: () => ( <AccountRegister /> ),
      })
    }
  })

  FlowRouter.route( '/login', {
    name: "accounts.login",
    action() {
      mount( SplitLayoutCtx, {
        content: () => ( <AccountLogin /> ),
      })
    }
  })

  FlowRouter.notFound = {
    action() {
      mount( MainLayoutCtx, {
        content: () => ( <AppNotFound /> ),
      })
    }
  }
}
