import React from 'react';

const Footer = () => (
  <footer className="container">
    <div className="row">
      <div className="col-sm-4">
        <h5>Telephrase</h5>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="col-sm-4">
        <h5>Connect</h5>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Reddit</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Imgur</a></li>
        </ul>
      </div>
      <div className="col-sm-4">
        <img src="http://placehold.it/240x160" />
      </div>
    </div>
  </footer>
);

export default Footer;
