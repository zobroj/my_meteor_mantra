import React from 'react';
import AccountLoggedIn from './account_logged_in';
import AccountPasswordResetGuest from '../containers/account_password_reset_guest';
import { AuthCheck } from '/client/configs/components';
import { Panel } from 'react-bootstrap';

const AccountPasswordReset = ({token}) => (
  <Panel header="Change your password" >
    <AuthCheck guestMessage={
                  <AccountPasswordResetGuest token={token} />
                }>
      <AccountLoggedIn />
    </AuthCheck>
  </Panel>
);

export default AccountPasswordReset;

AccountPasswordReset.propTypes = {
  token: React.PropTypes.string,
};
