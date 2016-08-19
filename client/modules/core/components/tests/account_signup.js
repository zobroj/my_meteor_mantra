const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {stub} from 'sinon';
import AccountSignup from '../account_signup';

describe('core.components.account_signup', () => {
  const EMAIL = 'the-email';
  const USERNAME = 'the-username';
  const PASSWORD1 = 'the-password1';
  const PASSWORD2 = 'the-password2';
  var actions;
  var button;
  var el;
  var emailInput;
  var usernameInput;
  var password1Input;
  var password2Input;
  beforeEach(() => {
    actions = {signup: stub()};
    el = shallow(<AccountSignup signup={actions.signup}/>);
    button = el.find('Button.submit');
    emailInput = el.find({type: 'email'});
    usernameInput = el.find({type: 'text'});
    password1Input = el.find({placeholder: 'Enter password'});
    password2Input = el.find({placeholder: 'Confirm password'});
  });

  it('should have component imports', () => {
    expect(el.find('UseDeps(Container(AuthEnsureGuest))')).to.have.length(1);
    expect(el.find('Panel AppErrorMsg')).to.have.length(1);
  });

  it('should render signup form', () => {
    expect(emailInput).to.have.length(1);
    expect(emailInput.prop('value')).to.be.equal('');
    expect(usernameInput).to.have.length(1);
    expect(usernameInput.prop('value')).to.be.equal('');
    expect(password1Input).to.have.length(1);
    expect(password1Input.prop('value')).to.be.equal('');
    expect(password2Input).to.have.length(1);
    expect(password2Input.prop('value')).to.be.equal('');
    expect(button).to.have.length(1);
    expect(button.prop('onClick')).to.be.a('function');
  });

  it('should handle input changes', () => {
    emailInput.simulate('change', {target: {value: EMAIL}});
    expect(el.state('email'), 'email').to.be.equal(EMAIL);
    usernameInput.simulate('change', {target: {value: USERNAME}});
    expect(el.state('username'), 'username').to.be.equal(USERNAME);
    password1Input.simulate('change', {target: {value: PASSWORD1}});
    expect(el.state('password1'), 'password1').to.be.equal(PASSWORD1);
    password2Input.simulate('change', {target: {value: PASSWORD2}});
    expect(el.state('password2'), 'password2').to.be.equal(PASSWORD2);
  });

  it('should call signup method on button click', () => {
    el.setState({email: EMAIL});
    el.setState({username: USERNAME});
    el.setState({password1: PASSWORD1});
    el.setState({password2: PASSWORD2});
    button.simulate('click');
    const args = actions.signup.args[0];
    expect(args.slice(0,4)).to.deep.equal(
      [ EMAIL, USERNAME, PASSWORD1, PASSWORD2 ]
    );
  });
});
