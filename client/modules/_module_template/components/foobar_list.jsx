import React from 'react';

// HTML composition and logic
const FoobarList = ( { foobars } ) => (
  <div>
    <h3>Foobars List</h3>
    <ul>
    { foobars.map( foobar => (
      <li key={ foobar._id }>{ foobar.name }</li>
    ))}
    </ul>
  </div>
);

export default FoobarList;
