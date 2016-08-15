const {describe, it} = global;
import {stub} from 'sinon';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import proxyquire from 'proxyquire';

// stub components and helper function
const isActiveRoute = stub();
const NavbarMain = proxyquire('../navbar_main.jsx', {
  '../lib/helpers.js': {isActiveRoute, '@noCallThru': true},
}).default;

describe('core.components.navbar_main', () => {
  it('should contain navbar_user controls', () => {
    const el = shallow(<NavbarMain />);
    expect(el.find('NavbarUser').length).to.be.equal(1);
  });

  it('should contain a link to home', () => {
    // isActiveRoute.returns('active');
    const el = shallow(<NavbarMain />);
    const homeLink = el.find('a').at(0);
    expect(homeLink.text()).to.be.equal('My Meteor Mantra');
    expect(homeLink.prop('href')).to.be.equal('/');
  });

  it('should contain a link to posts list', () => {
    const el = shallow(<NavbarMain />);
    const newPostLink = el.find('NavItem').at(0);
    expect(newPostLink.html()).to.match(/Posts/);
    expect(newPostLink.prop('href')).to.be.equal('/post');
  });
});
