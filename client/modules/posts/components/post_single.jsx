import React from 'react';
import CommentList from '../../comments/containers/comment_list';

class PostSingle extends React.Component {
  render() {

    const { post } = this.props

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <a href={ FlowRouter.path( 'posts.list' ) }>&lt; Back</a>
            <div className="page-header">
              <h3>{ post.title }</h3>
              <p><strong>{ post.author }</strong> - { post.createdAt.toLocaleDateString() }</p>
            </div>
            <div class="content">
              <p>{ post.content }</p>
            </div>
          </div>
        </div>
        <CommentList postId={ post._id } />
      </div>
    )

  }
}

export default PostSingle;
