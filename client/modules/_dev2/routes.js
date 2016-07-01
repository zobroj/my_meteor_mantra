import React from 'react';
import { mount } from 'react-mounter';

import { SplitLayout } from '/client/configs/components.js';

import PRODUCTS from './products.js';
import FilterableProductTable from './filterable_product_table';
import ClassFilterableProductTable from './class_filterable_product_table';

export default function ( injectDeps, { FlowRouter } ) {
  const SplitLayoutCtx = injectDeps( SplitLayout );

  FlowRouter.route( '/dev2', {
    name: "dev2",
    action() {
      mount( SplitLayoutCtx, {
        content: () => (
          <div>
          <h3>React.createClass</h3>
          <FilterableProductTable products={PRODUCTS} />
          <h3>Class React.Component</h3>
          <ClassFilterableProductTable products={PRODUCTS} />
          </div>
        ),
      });
    }
  });
}
