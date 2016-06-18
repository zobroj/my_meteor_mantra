import React from 'react';
// import CommentList from './comment_list';
import CommentList from './comment_list';
import CommentForm from './comment_form';

// this pattern matchesn the post_create.jsx component
class CommentBox extends React.Component {
  render() {

    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={ this.props.data }/>
        <CommentForm />
      </div>
    )
    
  }
}

export default CommentBox;
