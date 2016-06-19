import React from 'react';
import CommentBox from '../../_dev/comment_box';
import FilterableProductTable from '../../_dev2/filterable_product_table';
import PRODUCTS from '../../_dev2/products.js';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>Introduction</h1>
            <p>Hello, World.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-primary">
                <a href={ FlowRouter.path( 'posts.list' ) }>Test Page</a>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <CommentBox />
            </div>
            <div className="col-xs-6">
              <FilterableProductTable products={ PRODUCTS } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainPage;
