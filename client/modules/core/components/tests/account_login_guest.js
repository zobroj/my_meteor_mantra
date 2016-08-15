const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AccountLoginGuest from '../account_login_guest';

// if loggedIn
describe('core.components.account_login_guest', () => {
  it('contains an AppErrorMsg component', () => {
    const el = shallow(<AccountLoginGuest />);
    expect(el.find('AppErrorMsg')).to.have.length(1);
  });

  it('should show the login form');

  it('should login when click on the submit button');

  describe('if user clicks on reset password link', () => {
    it('should show the reset password modal');

    it('should show the reset password form');

    it('should reset password when click on the button');
  });
});
