import React from 'react';
// import CommentList from './comment_list';
import CommentList from './comment_list';
import CommentForm from './comment_form';

const CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data: [
        { id: 1, author: "Pete Hunt", text: "This is one comment" },
        { id: 2, author: "Jordan Walke", text: "This is *another* comment" },
        { id: 3, author: "Bilbo Baggins", text: "Lord of the Rings character" },
        { id: 4, author: "Alice In Chains", text: "Man in a Hole" }
      ]
    }
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={ this.state.data }/>
        <CommentForm />
      </div>
    );
  }
});

export default CommentBox;
