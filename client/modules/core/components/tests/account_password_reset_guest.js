const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AccountPasswordResetGuest from '../account_password_reset_guest';

// if loggedIn
describe('core.components.account_password_reset', () => {
  it('should contain AppErrorMsg component', () => {
    const el = shallow(<AccountPasswordResetGuest />);
    expect(el.find('AppErrorMsg', 'AppErrorMsg').length).to.be.equal(1);
  });
  it('should contain req props'/* , () => {
    error
    token
    resetPassword
  }*/);
  it('should contain reset password form');
  it('should resetPassword when button click');
});
