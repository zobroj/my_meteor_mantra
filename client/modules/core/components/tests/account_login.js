const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {stub} from 'sinon';
import AccountLogin from '../account_login';


// if loggedIn
describe('core.components.account_login', () => {
  describe('Account Login Form', () => {
    let actions;
    let el;
    let form;
    beforeEach(() => {
      actions = {login: stub()};
      el = shallow(<AccountLogin login={actions.login}/>);
      form = el.find('form#account-login');
    });

    it('should contain component imports', () => {
      expect(el.find('UseDeps(Container(AuthEnsureGuest))'))
        .to.have.length(1);
      expect(el.find('Panel AppErrorMsg')).to.have.length(1);
    });

    it('should render account login form', () => {
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
    let actions;
    let el;
    beforeEach(() => {
      actions = {sendResetPasswordLink: stub()};
      el = shallow(
        <AccountLogin sendResetPasswordLink={actions.sendResetPasswordLink}/>
      );
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
      const form = el.find('form#reset-password');
      const emailInput = form.find({type: 'email'});
      expect(emailInput.prop('value'), 'email').to.be.equal('');
      expect(emailInput.prop('onChange'), 'email').to.be.a('function');
      // IN MODAL
      const closeButton = el.find('Modal Button.close-modal');
      const resetButton = el.find('Modal Button.submit');
      expect(closeButton.prop('onClick'), 'close').to.be.a('function');
      expect(closeButton.html(), 'close').to.match(/Close/);
      expect(resetButton.prop('onClick'), 'reset').to.be.a('function');
      expect(resetButton.html(), 'reset').to.match(/Reset/);
    });

    it('should close modal when click on close button', () => {
      el.setState({showModal: true});
      const closeButton = el.find('Modal Button.close-modal');
      closeButton.simulate('click');
      expect(el.state('showModal')).to.equal(false);
    });

    it('should reset password when click on the button', () => {
      const resetEmail = 'the-resetEmail';
      el.setState({resetEmail});
      const resetButton = el.find('Modal Button.submit');
      resetButton.simulate('click');
      const args = actions.sendResetPasswordLink.args[0];
      expect(args.slice(0,2)).to.deep.equal([ resetEmail ]);
    });
  });
});
