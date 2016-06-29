import React from 'react'

class AccountNotLoggedIn extends React.Component {
  render() {
    return (
      <div>
        Please sign in to view this page. <a href='/'>Go back to the main page</a>.
      </div>
    )
  }
}

export default AccountNotLoggedIn
