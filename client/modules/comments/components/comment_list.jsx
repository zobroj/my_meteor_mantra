import React from 'react';
import CommentCreate from '../containers/comment_create.js';
import { Col, ListGroup, ListGroupItem, Panel, Row } from 'react-bootstrap';

const CommentList = ({
    comments, postId,
    emailVerified, loggingIn, loggedIn,
  }) => {
  const commentNodes = comments.map(comment => (
    <ListGroupItem key={comment._id}>
      <strong>{comment.author}</strong> - {comment.createdAt.toLocaleDateString()}
      <p>{comment.content}</p>
      {comment.saving ? '...' : null}
    </ListGroupItem>
  ));
  const commentNone = (
    <ListGroupItem>
      No comments yet!
    </ListGroupItem>
  );
  return (
    <Row>
      <Col xs={12} sm={8} smOffset={2}>
        <Panel header="Add Comment">
          <CommentCreate
            emailVerified={emailVerified}
            loggingIn={loggingIn}
            loggedIn={loggedIn}
            postId={postId}
          />
        </Panel>
        <Panel header="Comments">
          <ListGroup fill>
            {comments.length === 0 ? commentNone : null}
            {commentNodes}
          </ListGroup>
        </Panel>
      </Col>
    </Row>
  );
};

export default CommentList;

CommentList.propTypes = {
  emailVerified: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  comments: React.PropTypes.array,
  postId: React.PropTypes.string,
};
