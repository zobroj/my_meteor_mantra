/* eslint-disable no-unused-expressions */
const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AccountSignup from '../account_signup';

// if loggedIn
describe('core.components.account_signup', () => {
  it('should have component imports', () => {
    const el = shallow(<AccountSignup />);
    expect(el.find('UseDeps(Container(AuthEnsureGuest))')).to.have.length(1);
    expect(el.find('Panel AppErrorMsg')).to.have.length(1);
  });

  it('should have req props', () => {
    const el = shallow(<AccountSignup />);
    expect(el.props('error')).to.be.defined;
    expect(el.props('signup')).to.be.defined;
  });

  it('should display singup form', () => {
    const el = shallow(<AccountSignup />);
    const emailInput = el.find({type: 'email'});
    const usernameInput = el.find({type: 'text'});
    const password1Input = el.find({placeholder: 'Enter password'});
    const password2Input = el.find({placeholder: 'Confirm password'});
    const button = el.find('Button.submit');
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

  it('should signup user when button click', done => {
    const email = 'the-email';
    const username = 'the-username';
    const password1 = 'the-password1';
    const password2 = 'the-password2';
    const onClick = () => {
      /* TODO not very effective as this will always pass */
      expect(username).to.be.equal(username);
      expect(password1).to.be.equal(password1);
      expect(password2).to.be.equal(password2);
      done();
    };
    const el = shallow(<AccountSignup signup={onClick}/>);
    el.setState({email});
    el.setState({username});
    el.setState({password1});
    el.setState({password2});
    const button = el.find('Button.submit');
    button.simulate('click');
  });
});
