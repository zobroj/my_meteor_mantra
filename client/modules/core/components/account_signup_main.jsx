import AccountLoggedIn from './account_logged_in';
import { AuthEnsureUser } from '/client/configs/components';
import AccountSignupGuest from '../containers/account_signup_guest';

const AccountSignupMain = () => (
  <AuthEnsureUser guestMessage={<AccountSignupGuest/>}>
    <AccountLoggedIn />
  </AuthEnsureUser>
);

export default AccountSignupMain;
