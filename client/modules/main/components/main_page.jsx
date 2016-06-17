import React from 'react';
import CommentBox from '../../_dev/comment_box';

const data = [
  { id: 1, author: "Pete Hunt", text: "This is one comment" },
  { id: 2, author: "Jordan Walke", text: "This is *another* comment" },
  { id: 3, author: "Bilbo Baggins", text: "Lord of the Rings character" },
  { id: 4, author: "Alice In Chains", text: "Man in a Hole" }
];

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
          <CommentBox data={ data }/>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
