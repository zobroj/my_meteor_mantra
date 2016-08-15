import AccountLoggedIn from './account_logged_in';
import AccountLoginGuest from '../containers/account_login_guest';
import { AuthCheck } from '/client/configs/components';

const Component = () => (
  <AuthCheck guestMessage={<AccountLoginGuest/>}>
    <AccountLoggedIn />
  </AuthCheck>
);

export default Component;
