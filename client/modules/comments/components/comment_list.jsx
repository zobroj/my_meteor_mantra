import React from 'react';
import CommentCreate from '../containers/comment_create.js';

export const Waiting = () => (
  <div className="row">
    <div className="col-lg-12">
      <p className="alert alert-warning">No comments yet. Be the first!</p>
    </div>
  </div>
);

const CommentList = ( { comments, postId } ) => (
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
              { comments.length === 0 ? <p>No Comments Yet!</p> : null }
              { comments.map( comment => (
                <div key={ comment._id } className="list-group-item">
                  <strong>{ comment.author }</strong> - { comment.createdAt.toLocaleDateString() }
                  <p>{ comment.content }</p>
                  { comment.saving ? '...' : null }
                </div>
              ) )}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default CommentList;
