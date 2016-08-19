const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {stub} from 'sinon';
import AccountLogin from '../account_login';

describe('core.components.account_login', () => {
  describe('Account Login Form', () => {
    var actions;
    var button;
    var el;
    var emailInput;
    var form;
    var passwordInput;
    beforeEach(() => {
      actions = {login: stub()};
      el = shallow(<AccountLogin login={actions.login}/>);
      form = el.find('form#account-login');
      button = form.find('Button').first();
      emailInput = form.find({type: 'email'});
      passwordInput = form.find({type: 'password'});
    });

    it('should contain component imports', () => {
      expect(el.find('UseDeps(Container(AuthEnsureGuest))'))
        .to.have.length(1);
      expect(el.find('Panel AppErrorMsg')).to.have.length(1);
    });

    it('should render account login form', () => {
      expect(button.html()).to.match(/Log In/);
      expect(button.prop('onClick')).to.be.a('function');
      expect(emailInput.prop('value')).to.be.equal('');
      expect(emailInput.prop('onChange')).to.be.a('function');
      expect(passwordInput.prop('value')).to.be.equal('');
      expect(passwordInput.prop('onChange')).to.be.a('function');
    });

    it('should handle input changes', () => {
      const newEmail = 'the-email';
      const newPassword = 'the-password';
      emailInput.simulate('change', {target: {value: newEmail}});
      expect(el.state('email'), 'email').to.be.equal(newEmail);
      passwordInput.simulate('change', {target: {value: newPassword}});
      expect(el.state('password'), 'password').to.be.equal(newPassword);
    });

    it('should call login when click on submit', () => {
      const email = 'the-email';
      const password = 'the-password';
      el.setState({email, password});
      form.find('Button').first().simulate('click');
      const args = actions.login.args[0];
      expect(args.slice(0,2)).to.deep.equal([ email, password ]);
    });
  });

  describe('Reset Password Modal', () => {
    var actions;
    var closeButton;
    var el;
    var emailInput;
    var form;
    var resetButton;
    beforeEach(() => {
      actions = {sendResetPasswordLink: stub()};
      el = shallow(
        <AccountLogin sendResetPasswordLink={actions.sendResetPasswordLink}/>
      );
      closeButton = el.find('Modal Button.close-modal');
      resetButton = el.find('Modal Button.submit');
      form = el.find('form#reset-password');
      emailInput = form.find({type: 'email'});
    });

    it('should contain an AppErrorMsg component', () => {
      expect(el.find('Modal AppErrorMsg')).to.have.length(1);
    });

    it('should show the reset password modal', () => {
      el.setState({showModal: false});
      const linky = el.find('#show-reset-modal a');
      expect(linky.prop('onClick')).to.be.a('function');
      linky.simulate('click');
      expect(el.state('showModal')).to.equal(true);
    });

    it('should render reset password form', () => {
      // IN FORM
      expect(emailInput.prop('value'), 'email').to.be.equal('');
      expect(emailInput.prop('onChange'), 'email').to.be.a('function');
      // IN MODAL
      expect(closeButton.prop('onClick'), 'close').to.be.a('function');
      expect(closeButton.html(), 'close').to.match(/Close/);
      expect(resetButton.prop('onClick'), 'reset').to.be.a('function');
      expect(resetButton.html(), 'reset').to.match(/Reset/);
    });

    it('should handle input changes', () => {
      const newEmail = 'the-email';
      emailInput.simulate('change', {target: {value: newEmail}});
      expect(el.state('resetEmail'), 'resetEmail').to.be.equal(newEmail);
    });

    it('should close modal when click on close button', () => {
      el.setState({showModal: true});
      closeButton.simulate('click');
      expect(el.state('showModal')).to.equal(false);
    });

    it('should reset password when click on the button', () => {
      const resetEmail = 'the-resetEmail';
      el.setState({resetEmail});
      resetButton.simulate('click');
      const args = actions.sendResetPasswordLink.args[0];
      expect(args.slice(0,2)).to.deep.equal([ resetEmail ]);
    });
  });
});
