import React from 'react';
import { EnsureLoggedIn } from 'meteor-auth';
import { NotLoggedInMessage } from '/client/configs/components.js';

class FoobarList extends React.Component {
  render() {

    const { foobars, loggedIn, loggingIn } = this.props

    const foobarNodes = foobars.map( foobar => (
        <li key={ foobar._id }>{ foobar.name }</li>
      )
    )

    return (
      <div>
        <h3>Foobars List</h3>
        <ul>
          <EnsureLoggedIn unauthenticatedMessage={ NotLoggedInMessage }>
          { foobarNodes }
          </EnsureLoggedIn>
        </ul>
        {
          loggedIn ? <div>Hide this if not logged in!</div> :
          loggingIn ? <div>Loading...</div> : NotLoggedInMessage
        }
      </div>
    )

  }
}

export default FoobarList
