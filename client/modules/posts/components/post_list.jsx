import React from 'react';
import PostCreate from '../containers/post_create.js';
import { AppErrorMsg } from '/client/configs/components';
import { Col, ListGroup, ListGroupItem, Panel, Row } from 'react-bootstrap';

export default class PostList extends React.Component {
  render() {
    const postNodes = this.props.posts.map(post => (
      <ListGroupItem key={post._id}>
        <a href={`/post/${post._id}`}>{post.title}</a>
        <p className="small">
          <strong>{post.author}</strong> - {post.createdAt.toLocaleDateString()}
        </p>
      </ListGroupItem>
    ));
    return (
      <Row>
        <AppErrorMsg error={this.props.error} />
        <Col md={12}>
          <Panel header="Posts">
            <ListGroup fill>
              {postNodes}
            </ListGroup>
          </Panel>
          <Panel header="Create a post">
            <PostCreate />
          </Panel>
        </Col>
      </Row>
    );
  }
}

PostList.propTypes = {
  error: React.PropType.string,
  posts: React.PropType.array,
};
