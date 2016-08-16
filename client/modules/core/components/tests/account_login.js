const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AccountLogin from '../account_login';

// if loggedIn
describe('core.components.account_login', () => {
  it('should contain an AppErrorMsg component', () => {
    const el = shallow(<AccountLogin />);
    expect(el.find('Panel AppErrorMsg')).to.have.length(1);
  });

  it('should show the login form', () => {
    const el = shallow(<AccountLogin />);
    const form = el.find('form#account-login');
    const button = form.find('Button').first();
    const emailInput = form.find({type: 'email'});
    const passwordInput = form.find({type: 'password'});
    expect(button.html()).to.match(/Log In/);
    expect(button.prop('onClick')).to.be.a('function');
    expect(emailInput.prop('value')).to.be.equal('');
    expect(emailInput.prop('onChange')).to.be.a('function');
    expect(passwordInput.prop('value')).to.be.equal('');
    expect(passwordInput.prop('onChange')).to.be.a('function');
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
      <AccountLogin login={onLogin} />
    );
    el.setState({email, password});
    const button = el.find('Button').first();
    button.simulate('click');
  });

  describe('if user clicks on reset password link', () => {
    it('should contain an AppErrorMsg component', () => {
      const el = shallow(<AccountLogin />);
      expect(el.find('Modal AppErrorMsg')).to.have.length(1);
    });

    it('should show the reset password modal', () => {
      const el = shallow(<AccountLogin />);
      el.setState({showModal: false});
      const linky = el.find('#show-reset-modal a');
      expect(linky.prop('onClick')).to.be.a('function');
      linky.simulate('click');
      expect(el.state('showModal')).to.equal(true);
    });

    it('should show reset password form', () => {
      const el = shallow(<AccountLogin />);
      // IN FORM
      const form = el.find('form#reset-password');
      const emailInput = form.find({type: 'email'});
      expect(emailInput.prop('value'), 'email').to.be.equal('');
      expect(emailInput.prop('onChange'), 'email').to.be.a('function');
      // IN MODAL
      const closeButton = el.find('Modal Button.close');
      const resetButton = el.find('Modal Button.submit');
      expect(closeButton.prop('onClick'), 'close').to.be.a('function');
      expect(closeButton.html(), 'close').to.match(/Close/);
      expect(resetButton.prop('onClick'), 'reset').to.be.a('function');
      expect(resetButton.html(), 'reset').to.match(/Reset/);
    });

    it('should close modal when click on close button', () => {
      const el = shallow(<AccountLogin />);
      el.setState({showModal: true});
      const closeButton = el.find('Modal Button.close');
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
        <AccountLogin sendResetPasswordLink={onClick}/>
      );
      el.setState({resetEmail});
      const resetButton = el.find('Modal Button.submit');
      resetButton.simulate('click');
    });
  });
});
