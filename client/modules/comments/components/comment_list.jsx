import React from 'react';
import CommentCreate from '../containers/comment_create.js';

class CommentList extends React.Component {
  render() {

    const { comments, postId } = this.props

    const commentNodes = comments.map( comment => {
      return (
        <div key={ comment._id } className="list-group-item">
          <strong>{ comment.author }</strong> - { comment.createdAt.toLocaleDateString() }
          <p>{ comment.content }</p>
          { comment.saving ? '...' : null }
        </div>
      )
    })

    const commentNone = (
      <p>No comments yet!</p>
    )

    return (
      <div className="row comments">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          <div className="panel-group">
            <div className="panel panel-default">
              <div className="panel-heading">Add Comment</div>
              <div className="panel-body">
                <CommentCreate postId={ postId } />
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">Comments</div>
              <div className="panel-body">
                <div className="list-group">
                  { comments.length === 0 ? commentNone : null }
                  { commentNodes }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentList
