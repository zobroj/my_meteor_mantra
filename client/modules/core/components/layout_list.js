import React from 'react';
import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';
import { AppVerifiedMsg } from '/client/configs/components';
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
