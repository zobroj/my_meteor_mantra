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

  it('should show the login form', () => {
    const el = shallow(<AccountLoginGuest />);
    const button = el.find('Button').first();
    expect(button.html()).to.match(/Log In/);
    expect(button.prop('onClick')).to.be.a('function');
  });

  it('should login when click on the submit', done => {
    const email = 'the-email';
    const password = 'the-password';
    const onLogin = () => {
      expect(email).to.be.equal(email);
      expect(password).to.be.equal(password);
      done();
    };
    const el = shallow(
      <AccountLoginGuest login={onLogin} />
    );
    el.setState({email, password});
    const button = el.find('Button').first();
    button.simulate('click');
  });

  describe('if user clicks on reset password link', () => {
    it('should show the reset password modal');

    it('should show the reset password form');

    it('should reset password when click on the button');
  });
});
