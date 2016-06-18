import React from 'react';
// import CommentList from './comment_list';
import CommentList from './comment_list';
import CommentForm from './comment_form';

// similar to container
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
  handleCommentSubmit: function( comment ) {
    const comments = this.state.data;
    comment.id = Date.now();
    const newComments = comments.concat( [ comment ] );
    this.setState( { data: newComments } );
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={ this.state.data } />
        <CommentForm onCommentSubmit={ this.handleCommentSubmit } />
      </div>
    );
  }
});

export default CommentBox;
