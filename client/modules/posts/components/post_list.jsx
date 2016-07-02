import React from 'react';
import PostCreate from '../containers/post_create.js';
import { AppErrorMsg } from '/client/configs/components'
import {
  Row,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'

class PostList extends React.Component {
  render() {

    const { posts, error } = this.props

    const postNodes = posts.map( post => (
        <ListGroupItem key={ post._id }>
          <a href={ `/post/${ post._id }` }>{ post.title }</a>
          <p className="small"><strong>{ post.author }</strong> - { post.createdAt.toLocaleDateString() }</p>
        </ListGroupItem>
      )
    )

    return (
      <Row>
        <AppErrorMsg error={ error } />
        <Col md={12}>
          <Panel header="Posts">
            <ListGroup fill>
              { postNodes }
            </ListGroup>
          </Panel>
          <Panel header="Create a post">
            <PostCreate />
          </Panel>
        </Col>
      </Row>
    )

  }
}

export default PostList
