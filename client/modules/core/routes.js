import React from 'react';
import { mount } from 'react-mounter'

import {
  MainLayout,
  SplitLayout,
  AppNotFound,
} from '/client/configs/components'

import AccountRegister from './containers/account_register'
import AccountLogin from './containers/account_login'
import AccountPreferences from './containers/account_preferences'

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

  FlowRouter.route( '/user/:username/preferences', {
    name: "accounts.preferences",
    action() {
      mount( MainLayoutCtx, {
        content: () => ( <AccountPreferences /> ),
      })
    }
  })

  FlowRouter.notFound = {
    action() {
      name: "app.notFound"
      mount( MainLayoutCtx, {
        content: () => ( <AppNotFound /> ),
      })
    }
  }
}
