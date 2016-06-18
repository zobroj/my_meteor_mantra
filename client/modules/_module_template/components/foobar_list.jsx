import React from 'react';

// HTML composition and logic
class FoobarList extends React.Component {
  render() {

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
}

export default FoobarList
