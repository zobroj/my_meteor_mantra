const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {stub} from 'sinon';
import AccountSignup from '../account_signup';

describe('core.components.account_signup', () => {
  var actions;
  var button;
  var el;
  beforeEach(() => {
    actions = {signup: stub()};
    el = shallow(<AccountSignup signup={actions.signup}/>);
    button = el.find('Button.submit');
  });

  it('should have component imports', () => {
    expect(el.find('UseDeps(Container(AuthEnsureGuest))')).to.have.length(1);
    expect(el.find('Panel AppErrorMsg')).to.have.length(1);
  });

  it('should render signup form', () => {
    const emailInput = el.find({type: 'email'});
    const usernameInput = el.find({type: 'text'});
    const password1Input = el.find({placeholder: 'Enter password'});
    const password2Input = el.find({placeholder: 'Confirm password'});
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

  it('should signup user when button click', () => {
    const email = 'the-email';
    const username = 'the-username';
    const password1 = 'the-password1';
    const password2 = 'the-password2';
    el.setState({email});
    el.setState({username});
    el.setState({password1});
    el.setState({password2});
    button.simulate('click');
  });
});
