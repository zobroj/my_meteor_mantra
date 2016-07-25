import React from 'react';
import PostCreate from '../containers/post_create.js';
import { AppErrorMsg } from '/client/configs/components';
import { Col, ListGroup, ListGroupItem, Panel, Row } from 'react-bootstrap';

const PostList = ({
    posts, error,
    loggedIn, loggingIn, emailVerified,
  }) => {
  const postNodes = posts.map(post => (
    <ListGroupItem key={post._id}>
      <a href={`/post/${post._id}`}>{post.title}</a>
      <p className="small">
        <strong>{post.author}</strong> - {post.createdAt.toLocaleDateString()}
      </p>
    </ListGroupItem>
  ));
  return (
    <Row>
      <AppErrorMsg error={error} />
      <Col md={12}>
        <Panel header="Posts">
          <ListGroup fill>
            {postNodes}
          </ListGroup>
        </Panel>
        <Panel header="Create a post">
          <PostCreate
            emailVerified={emailVerified}
            loggingIn={loggingIn}
            loggedIn={loggedIn}
          />
        </Panel>
      </Col>
    </Row>
  );
};

export default PostList;

PostList.propTypes = {
  emailVerified: React.PropTypes.bool,
  error: React.PropTypes.string,
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  posts: React.PropTypes.array,
};
