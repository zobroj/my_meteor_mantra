import React from 'react';
// import CommentList from './comment_list';
import CommentList from './comment_list';
import CommentForm from './comment_form';

const CommentBox = React.createClass({

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

export default CommentBox;
