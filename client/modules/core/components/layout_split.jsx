import React from 'react';
import Footer from '../components/footer';
import { AppVerifiedMsg, NavbarMain } from '/client/configs/components';
import { Col, Grid, Row } from 'react-bootstrap';

const LayoutSplit = ({ content = () => null }) => (
  <div>
    <NavbarMain />
    <AppVerifiedMsg />
    <Grid>
      <Row>
        <Col sm={6}>
          <h3>Why hello there.</h3>
        </Col>
        <Col sm={6}>
          {content()}
        </Col>
      </Row>
    </Grid>
    <hr />
    <Footer />
  </div>
);

export default LayoutSplit;

LayoutSplit.propTypes = {
  content: React.PropTypes.func,
};
