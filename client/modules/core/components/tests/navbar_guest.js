const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NavbarGuest from '../navbar_guest';

describe('core.components.navbar_guest', () => {
  describe('if user is NOT loggedIn', () => {
    it('should contain a login link', () => {
      const el = shallow(<NavbarGuest />);
      const loginLink = el.find('NavItem').at(0);
      expect(loginLink.prop('href')).to.be.equal('/login');
    });

    it('should display signup link', () => {
      const el = shallow(<NavbarGuest />);
      const signupLink = el.find('NavItem').at(1);
      expect(signupLink.prop('href')).to.be.equal('/signup');
    });
  });
});
