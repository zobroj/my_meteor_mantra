import React from 'react';
import CommentCreate from '../containers/comment_create.js';
import {
  Row,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'

class CommentList extends React.Component {
  render() {
    const { comments, postId } = this.props
    const commentNodes = comments.map( comment => {
      return (
        <ListGroupItem key={ comment._id }>
          <strong>{ comment.author }</strong> - { comment.createdAt.toLocaleDateString() }
          <p>{ comment.content }</p>
          { comment.saving ? '...' : null }
        </ListGroupItem>
      )
    })
    const commentNone = (
      <ListGroupItem>
        No comments yet!
      </ListGroupItem>
    )
    return (
      <Row>
        <Col xs={12} sm={8} smOffset={2}>
          <Panel header="Add Comment">
            <CommentCreate postId={ postId } />
          </Panel>
          <Panel header="Comments">
            <ListGroup fill>
              { comments.length === 0 ? commentNone : null }
              { commentNodes }
            </ListGroup>
          </Panel>
        </Col>
      </Row>
    )
  }
}

export default CommentList
