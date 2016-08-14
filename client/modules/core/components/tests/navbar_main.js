/* ERROR FlowRouter is not defined */
const {describe, it} = global;
import {stub, spy} from 'sinon';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import proxyquire from 'proxyquire';
proxyquire.noCallThru();

// stub components and helper function
const isActiveRoute = stub();
const Nav = () => <div></div>;
const Navbar = () => <div></div>;
const NavItem = () => <div></div>;
const NavbarUser = () => <div></div>;

const NavbarMain = proxyquire('../navbar_main.jsx', {
  '../components/navbar_user': NavbarUser,
  'react-bootstrap': {Nav, Navbar, NavItem},
  '../lib/helpers.js': {isActiveRoute},
}).default;

describe('core.components.navbar_main', () => {
  it('should contain a link to home', () => {
    isActiveRoute.returns('active');
    const el = shallow(<NavbarMain />);
    const homeLink = el.find('a').at(0);
    expect(homeLink.text()).to.be.equal('My Meteor Mantra');
    expect(homeLink.prop('href')).to.be.equal('/');
  });

  // it('should contain a link to create a new post', () => {
  //   const el = shallow(<NavbarMain />);
  //   const newPostLink = el.find('a').at(1);
  //   expect(newPostLink.text()).to.be.equal('New Post');
  //   expect(newPostLink.prop('href')).to.be.equal('/posts');
  // });
});
