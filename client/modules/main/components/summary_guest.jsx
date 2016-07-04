import React from 'react'
import {
  Button,
  Col,
  Grid,
  Jumbotron,
  Row,
} from 'react-bootstrap'

const SummaryGuest = () => (
  <Grid>
    <Row container>
      <Col md={12}>
        <Button bsStyle="primary" href={ FlowRouter.path( 'posts.list' ) }>Test Page</Button>
      </Col>
    </Row>
  </Grid>
)

export default SummaryGuest
