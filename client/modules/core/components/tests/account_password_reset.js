/* eslint-disable no-unused-expressions */
const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {stub} from 'sinon';
import AccountPasswordResetGuest from '../account_password_reset';

// if loggedIn
describe('core.components.account_password_reset', () => {
  let actions;
  let el;
  let token;
  beforeEach(() => {
    token = 'the-token';
    actions = {resetPassword: stub()};
    el = shallow(
      <AccountPasswordResetGuest
        token={token}
        resetPassword={actions.resetPassword}
      />
    );
  });
  it('should contain component imports', () => {
    expect(el.find('UseDeps(Container(AuthEnsureGuest))')).to.have.length(1);
    expect(el.find('AppErrorMsg', 'AppErrorMsg').length).to.be.equal(1);
  });

  it('should show reset password form', () => {
    expect(el.find('form#password-reset').length, 'form').to.be.equal(1);
    const textarea1 = el.find({placeholder: 'Enter password'});
    const textarea2 = el.find({placeholder: 'Enter password again'});
    const button = el.find('Button').first();
    expect(textarea1.prop('value')).to.be.equal('');
    expect(textarea2.prop('value')).to.be.equal('');
    expect(button.prop('onClick')).to.be.a('function');
  });

  it('should handle text change', () => {
    const newText1 = 'hello1';
    const newText2 = 'hello2';
    const textarea1 = el.find({placeholder: 'Enter password'});
    const textarea2 = el.find({placeholder: 'Enter password again'});
    textarea1.simulate('change', {target: {value: newText1}});
    expect(el.state('password1'), 'password1').to.be.equal(newText1);
    textarea2.simulate('change', {target: {value: newText2}});
    expect(el.state('password2'), 'password2').to.be.equal(newText2);
  });

  it('should resetPassword when click button', () => {
    const password1 = 'the-password1';
    const password2 = 'the-password2';
    el.setState({password1, password2});
    el.find('form#password-reset Button').simulate('click');
    const args = actions.resetPassword.args[0];
    expect(args.slice(0,3)).to.deep.equal([ token, password1, password2 ]);
  });
});
