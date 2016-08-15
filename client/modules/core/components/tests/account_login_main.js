const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AccountLoginMain from '../account_login_main';

// if loggedIn
describe('core.components.account_login_main', () => {
  describe('if user is loggedIn', () => {
    it('should contain AccountLoggedIn component', () => {
      const el = shallow(<AccountLoginMain/>);
      expect(el.find('AccountLoggedIn').length).to.be.equal(1);
    });
  });
});
