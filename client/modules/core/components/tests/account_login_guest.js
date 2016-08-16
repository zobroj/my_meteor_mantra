const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AccountLoginGuest from '../account_login_guest';

// if loggedIn
describe('core.components.account_login_guest', () => {
  it('should contain an AppErrorMsg component', () => {
    const el = shallow(<AccountLoginGuest />);
    expect(el.find('Panel AppErrorMsg')).to.have.length(1);
  });

  it('should show error message');
  // check  which message shows up

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

  it('should show a password reset link', () => {
    const el = shallow(<AccountLoginGuest />);
    const div = el.find('#reset-password');
    const linky = div.find('a').first();
    expect(linky.prop('onClick')).to.be.a('function');
  });

  describe('if user clicks on reset password link', () => {
    it('should contain an AppErrorMsg component', () => {
      const el = shallow(<AccountLoginGuest />);
      expect(el.find('Modal AppErrorMsg')).to.have.length(1);
    });

    it('should show error message');
    // check  which message shows up

    it('should show the reset password modal', () => {
      const el = shallow(<AccountLoginGuest />);
      el.setState({showModal: false});
      el.find('#reset-password a').simulate('click');
      expect(el.state('showModal')).to.equal(true);
    });

    it('should have a Close and Reset Password buttons', () => {
      const el = shallow(<AccountLoginGuest />);
      const closeButton = el.find('Modal Button#close');
      expect(closeButton.prop('onClick')).to.be.a('function');
      const resetButton = el.find('Modal Button#reset-password');
      expect(resetButton.prop('onClick')).to.be.a('function');
    });

    it('should close modal when click on close button', () => {
      const el = shallow(<AccountLoginGuest />);
      el.setState({showModal: true});
      const closeButton = el.find('Modal Button#close');
      closeButton.simulate('click');
      expect(el.state('showModal')).to.equal(false);
    });

    it('should reset password when click on the button', done => {
      const resetEmail = 'the-email';
      const onClick = () => {
        expect(resetEmail).to.be.equal(resetEmail);
        done();
      };
      const el = shallow(
        <AccountLoginGuest sendResetPasswordLink={onClick}/>
      );
      el.setState({resetEmail});
      const resetButton = el.find('Modal Button#reset-password');
      resetButton.simulate('click');
    });
  });
});
