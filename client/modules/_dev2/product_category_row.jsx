import React from 'react';

const ProductCategoryRow = React.createClass({
  render: function() {
    return (
      <tr>
        <th colSpan="2">
          { this.props.category }
        </th>
      </tr>
    );
  }
});

export default ProductCategoryRow;
