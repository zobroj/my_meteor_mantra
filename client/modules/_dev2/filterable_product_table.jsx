import React from 'react';
import SearchBar from './search_bar';
import ProductTable from './product_table';

const FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={ this.props.products } />
      </div>
    );
  }
});

export default FilterableProductTable;
