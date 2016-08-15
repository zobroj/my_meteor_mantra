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

    it('should contain a link to logout', done => {
      const onLogout = () => { done(); };
      const el = shallow(<NavbarUser logout={onLogout} {...props} />);
      const logoutLink = el.find('MenuItem').at(0);
      expect(logoutLink.html()).to.match(/Log Out/);
      logoutLink.simulate('click');
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

  describe('if user is NOT loggedIn', () => {
    /* TODO add a separate component for this? */
    it('should display login and signup links');
  });

  // it('should contain a link to posts list', () => {
  //   const el = shallow(<NavbarUser />);
  //   const newPostLink = el.find('NavItem').at(0);
  //   // expect(newPostLink.text()).to.be.equal('Posts');
  //   expect(newPostLink.prop('href')).to.be.equal('/post');
  // });
});
