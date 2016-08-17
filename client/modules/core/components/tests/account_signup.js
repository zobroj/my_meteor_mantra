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

  it('should display singup form');
  // email input state.to.be.equal('')
  // username input state.to.be.equal('')
  // password1 input state.to.be.equal('')
  // password2 input state.to.be.equal('')
  // buttton  onClick = {funciton}

  it('should signup user when button click');
  // *remove preventDefault
  // const signupDummyInfo = {}
  // button.simulate('click')
});
