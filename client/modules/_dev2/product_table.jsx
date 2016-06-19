import React from 'react';
import ProductCategoryRow from './product_category_row';
import ProductRow from './product_row';

const ProductTable = React.createClass({
  render: function() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach( ( product ) => {
      if ( product.category !== lastCategory ) {
        rows.push(
          <ProductCategoryRow
            category={ product.category }
            key={ product.category }
          />
        );
      }
      rows.push(
        <ProductRow
          product={ product }
          key={ product.name }
        />
      );
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{ rows }</tbody>
      </table>
    );
  }
});

export default ProductTable;
