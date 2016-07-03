import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap'

class Footer extends React.Component {
  render() {
    return (
      <footer className="container">
        <Row>
          <Col sm={4}>
            <h5>My Meteor</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col sm={4}>
            <h5>Connect</h5>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Reddit</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Imgur</a></li>
            </ul>
          </Col>
          <Col sm={4}>
            <img src="http://placehold.it/240x160" />
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer;
