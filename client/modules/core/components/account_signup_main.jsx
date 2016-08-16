import AccountLoggedIn from './account_logged_in';
import { AuthCheck } from '/client/configs/components';
import AccountSignupGuest from '../containers/account_signup_guest';

const AccountSignupMain = () => (
  <AuthCheck guestMessage={<AccountSignupGuest/>}>
    <AccountLoggedIn />
  </AuthCheck>
);

export default AccountSignupMain;
