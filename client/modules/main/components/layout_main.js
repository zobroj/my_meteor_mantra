import React from 'react';
import { AppVerifiedMsg, Footer, NavbarMain } from '/client/configs/components';

const LayoutMain = ({ jumbotron = () => null, content = () => null }) => (
  <div>
    <NavbarMain />
    <AppVerifiedMsg />
    {jumbotron()}
    {content()}
    <hr />
    <Footer />
  </div>
);

export default LayoutMain;

LayoutMain.propTypes = {
  content: React.PropTypes.func,
  jumbotron: React.PropTypes.func,
};
