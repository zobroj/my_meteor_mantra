const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AccountPasswordResetGuest from '../account_password_reset_guest';

// if loggedIn
describe('core.components.account_password_reset_guest', () => {
  it('should contain AppErrorMsg component', () => {
    const el = shallow(<AccountPasswordResetGuest />);
    expect(el.find('AppErrorMsg', 'AppErrorMsg').length).to.be.equal(1);
  });

  it('should contain req props', () => {
    const el = shallow(<AccountPasswordResetGuest />);
    expect(el.props().token, 'token').to.be.defined;
    expect(el.props().resetPassword, 'resetPassword').to.be.defined;
  });

  it('should show reset password form', () => {
    const el = shallow(<AccountPasswordResetGuest />);
    expect(el.find('form#password-reset').length, 'form').to.be.equal(1);
  });

  it('should resetPassword when click button', () => {
    const el = shallow(<AccountPasswordResetGuest />);
    const button = el.find('form Button');
    console.log(button.debug());
  });
});
