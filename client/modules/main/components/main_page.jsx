import React from 'react';
import {
  Grid,
  Jumbotron,
  Button,
  Row,
  Col,
} from 'react-bootstrap'

class MainPage extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Introduction</h1>
          <p>Hello, World.</p>
        </Jumbotron>
        <Row container>
          <Col md={12}>
            <Button bsStyle="primary" href={ FlowRouter.path( 'posts.list' ) }>Test Page</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default MainPage;
