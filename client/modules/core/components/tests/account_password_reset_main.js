const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AccountPasswordResetMain from '../account_password_reset_main';

// if loggedIn
describe('core.components.account_password_reset', () => {
  it('should contain requirements', () => {
    const el = shallow(<AccountPasswordResetMain />);
    console.log(el.debug())
    expect(el.find(
      'AccountLoggedIn', 'AccountLoggedIn').length).to.be.equal(1);
    expect(el.props().token, 'token').to.be.defined;
  });
});
