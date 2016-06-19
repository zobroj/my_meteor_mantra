import React from 'react';

const SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          { ' ' }
          Only show product in stock
        </p>
      </form>
    );
  }
});

export default SearchBar;
