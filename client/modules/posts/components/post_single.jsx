import React from 'react';
import CommentList from '../../comments/containers/comment_list';
import { Col, PageHeader, Row } from 'react-bootstrap';

const PostSingle = ({ post }) => (
  <div>
    <Row>
      <Col xs={12} sm={8} smOffset={2}>
        <a href="/post">&lt; Back</a>
        <PageHeader>
          {post.title}
        </PageHeader>
        <p><strong>{post.username}</strong> - {post.createdAt.toLocaleDateString()}</p>
        <p>{post.text}</p>
      </Col>
    </Row>
    <CommentList postId={post._id} />
  </div>
);

export default PostSingle;

PostSingle.propTypes = {
  post: React.PropTypes.object,
};
