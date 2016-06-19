import React from 'react';

const SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={ this.props.filterText }
        />
        <p>
          <input
            type="checkbox"
            checked={ this.props.inStockOnly }
          />
          { ' ' }
          Only show product in stock
        </p>
      </form>
    );
  }
});

export default SearchBar;
