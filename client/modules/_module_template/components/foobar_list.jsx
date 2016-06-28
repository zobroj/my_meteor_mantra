import React from 'react'
import { AccountNotLoggedIn, AppLoading } from '/client/configs/components'

class FoobarList extends React.Component {

  displayUser() {

    const { foobars } = this.props

    const foobarNodes = foobars.map( foobar => (
        <li key={ foobar._id }>{ foobar.name }</li>
      )
    )

    return (
      <div>
        <h3>Foobars List</h3>
        <ul>
          { foobarNodes }
        </ul>
      </div>
    )
  }

  displayGuest() {
    return (
      <div>
        <h3>Foobar Test Page</h3>
        <AccountNotLoggedIn />
      </div>
    )
  }

  displayLoading() {
    return (
      <AppLoading />
    )
  }

  render() {

    const { loggedIn, loggingIn } = this.props

    if ( loggingIn ) { return this.displayLoading() }

    return (
      <div>
      { loggedIn ? this.displayUser() : this.displayGuest() }
      </div>
    )

  }
}

export default FoobarList
