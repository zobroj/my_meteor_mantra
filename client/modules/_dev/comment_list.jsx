import React from 'react';
import Comment from './comment';

const CommentList = React.createClass({
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
    const commentNodes = this.state.data.map( ( comment ) => {
      return (
        <Comment author={ comment.author } key={ comment.id }>
          { comment.text }
        </Comment>
      )
    })
    return (
      <div className="commentList">
        { commentNodes }
      </div>
    )
  }
});

export default CommentList;
