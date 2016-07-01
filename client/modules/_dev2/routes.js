import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '/client/configs/components.js';

import PRODUCTS from './products.js';
import FilterableProductTable from './filterable_product_table';

export default function ( injectDeps, { FlowRouter } ) {
  const MainLayoutCtx = injectDeps( MainLayout );

  FlowRouter.route( '/dev2', {
    name: "dev2",
    action() {
      mount( MainLayoutCtx, {
        content: () => ( <FilterableProductTable products={PRODUCTS} /> ),
      });
    }
  });
}
