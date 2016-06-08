import React from 'react';

const MainPage = () => (
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
    </div>
  </div>
);

export default MainPage;
