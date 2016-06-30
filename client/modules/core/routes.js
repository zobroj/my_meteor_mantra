import React from 'react';
import { mount } from 'react-mounter'

import {
  LayoutMain,
  LayoutSplit,
  AppNotFound,
} from '/client/configs/components'

import AccountRegister from './containers/account_register'
import AccountLogin from './containers/account_login'
import AccountPreferences from './containers/account_preferences'

export default function ( injectDeps, { FlowRouter } ) {

  const LayoutMainCtx = injectDeps ( LayoutMain )
  const LayoutSplitCtx = injectDeps ( LayoutSplit )

  FlowRouter.route( '/register', {
    name: "accounts.register",
    action() {
      mount( LayoutSplitCtx, {
        content: () => ( <AccountRegister /> ),
      })
    }
  })

  FlowRouter.route( '/login', {
    name: "accounts.login",
    action() {
      mount( LayoutSplitCtx, {
        content: () => ( <AccountLogin /> ),
      })
    }
  })

  FlowRouter.route( '/user/:username/preferences', {
    name: "accounts.preferences",
    action() {
      mount( LayoutMainCtx, {
        content: () => ( <AccountPreferences /> ),
      })
    }
  })

  FlowRouter.notFound = {
    action() {
      name: "app.notFound"
      mount( LayoutMainCtx, {
        content: () => ( <AppNotFound /> ),
      })
    }
  }
}
