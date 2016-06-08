import React from 'react';
import PostCreate from '../containers/post_create.js';

const PostList = ( { posts } ) => (
  <div className="row">
    <div className="col-md-12 panel-group">
      <div className="panel panel-default">
        <div className="panel-heading"><h4>Posts</h4></div>
        <div className="panel-body">
          <div className="list-group">
            { posts.map( post => (
              <div key={ post._id } className="list-group-item">
                <a href={ `/post/${ post._id }` }>
                  { post.title }
                </a>
                <p className="small">
                  <strong>{ post.author }</strong> - { post.createdAt.toLocaleDateString() }
                </p>
              </div>
            ) ) }
          </div>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">Add a Conversation</div>
        <div className="panel-body">
          <PostCreate />
        </div>
      </div>
    </div>
  </div>
);

export default PostList;
