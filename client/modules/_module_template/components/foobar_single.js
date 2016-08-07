import React from 'react';
import {
  Col, PageHeader, Row,
} from 'react-bootstrap';

const FoobarSingle = ({ foobarId }) => (
  <div>
    <Row>
      <Col xs={12} sm={8} smOffset={2}>
        <a href={FlowRouter.path('foobar.list')}>&lt; Back</a>
        <PageHeader>
          Title: {foobarId}
        </PageHeader>
        <p><strong>foobar.author</strong> - Date</p>
        <p>Content and what not</p>
      </Col>
    </Row>
  </div>
);

export default FoobarSingle;

FoobarSingle.propTypes = {
  foobarId: React.PropTypes.string,
};
