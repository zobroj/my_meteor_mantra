const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NavbarUser from '../navbar_user';

// if loggedIn
describe('core.components.navbar_user', () => {
  describe('if user is loggedIn', () => {
    var props;
    beforeEach(() => {
      props = {user: {username: 'bob'}};
    });

    it('should display the username on dropdown button', () => {
      const el = shallow(<NavbarUser {...props} />);
      const dropdownBtn = el.find('NavDropdown');
      expect(dropdownBtn.prop('title')).to.be.equal(props.user.username);
    });

    it('should contain a link to logout', () => {
      const el = shallow(<NavbarUser {...props} />);
      const logoutLink = el.find('MenuItem').at(0);
      console.log(logoutLink.debug())
      expect(logoutLink.html()).to.match(/Log Out/);
    });

    it('should contain a link to user preferences', () => {
      const el = shallow(<NavbarUser {...props} />);
      const prefLink = el.find('MenuItem').at(2);
      expect(prefLink.prop('href')).to.be.equal(
        `/user/${props.user.username}/preferences`
      );
      expect(prefLink.html()).to.match(/Preferences/);
    });
  });

  // it('should contain a link to posts list', () => {
  //   const el = shallow(<NavbarUser />);
  //   const newPostLink = el.find('NavItem').at(0);
  //   // expect(newPostLink.text()).to.be.equal('Posts');
  //   expect(newPostLink.prop('href')).to.be.equal('/post');
  // });
});
