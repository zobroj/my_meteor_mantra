import React from 'react';
import SearchBar from './search_bar';
import ProductTable from './product_table';

const FilterableProductTable = React.createClass({
  getInitialState: function () {
    return {
      filterText: '',
      inStockOnly: false
    };
  },
  render: function() {
    return (
      <div>
        <SearchBar
          filterText={ this.state.filterText }
          inStockOnly={ this.state.inStockOnly }
        />
        <ProductTable
          products={ this.props.products }
          filterText={ this.state.filterText }
          inStockOnly={ this.state.inStockOnly }
        />
      </div>
    );
  }
});

export default FilterableProductTable;
