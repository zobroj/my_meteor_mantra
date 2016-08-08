import React from 'react';
import Footer from '../components/footer';
import { AppVerifiedMsg, NavbarMain } from '/client/configs/components';
import { Grid } from 'react-bootstrap';

const LayoutList = ({ content = () => null }) => (
  <div>
    <NavbarMain />
    <AppVerifiedMsg />
    <Grid>
      {content()}
    </Grid>
    <hr />
    <Footer />
  </div>
);

export default LayoutList;

LayoutList.propTypes = {
  content: React.PropTypes.func,
};
