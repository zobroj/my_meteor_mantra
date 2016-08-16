import React from 'react';
import AccountLoggedIn from './account_logged_in';
import AccountPasswordResetGuest from '../containers/account_password_reset_guest';
import { AuthEnsureUser } from '/client/configs/components';
import { Panel } from 'react-bootstrap';

const AccountPasswordReset = ({token}) => (
  <Panel header="Change your password" >
    <AuthEnsureUser guestMessage={
                  <AccountPasswordResetGuest token={token} />
                }>
      <AccountLoggedIn />
    </AuthEnsureUser>
  </Panel>
);

export default AccountPasswordReset;

AccountPasswordReset.propTypes = {
  token: React.PropTypes.string,
};
