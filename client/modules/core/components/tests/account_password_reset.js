/* eslint-disable no-unused-expressions */
const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AccountPasswordResetGuest from '../account_password_reset';

// if loggedIn
describe('core.components.account_password_reset', () => {
  it('should contain component imports', () => {
    const el = shallow(<AccountPasswordResetGuest />);
    expect(el.find('UseDeps(Container(AuthEnsureGuest))')).to.have.length(1);
    expect(el.find('AppErrorMsg', 'AppErrorMsg').length).to.be.equal(1);
  });

  it('should contain req props', () => {
    const el = shallow(<AccountPasswordResetGuest />);
    expect(el.props().error, 'error').to.be.defined;
    expect(el.props().token, 'token').to.be.defined;
    expect(el.props().resetPassword, 'resetPassword').to.be.defined;
  });

  it('should show reset password form', () => {
    const el = shallow(<AccountPasswordResetGuest />);
    expect(el.find('form#password-reset').length, 'form').to.be.equal(1);
  });

  it('should resetPassword when click button', done => {
    const password = 'the-password';
    const token = 'the-token';
    const onClick = () => {
      expect(password).to.be.equal(password);
      expect(token).to.be.equal(token);
      done();
    };
    const el = shallow(
      <AccountPasswordResetGuest resetPassword={onClick} />
    );
    el.setState({password1: password});
    el.find('form#password-reset Button').simulate('click');
  });
});
