const {beforeEach, describe, it} = global;
import {stub} from 'sinon';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NavbarMain from '../navbar_main';

describe('core.components.navbar_main', () => {
  const actions = {isActiveRoute: stub()};
  var el;
  beforeEach(() => {
    el = shallow(<NavbarMain isActiveRoute={actions.isActiveRoute} />);
  });

  it('should contain navbar_user controls', () => {
    expect(el.find('NavbarUser').length).to.be.equal(1);
  });

  it('should contain a link to home', () => {
    const homeLink = el.find('a').at(0);
    expect(homeLink.text()).to.be.equal('My Meteor Mantra');
    expect(homeLink.prop('href')).to.be.equal('/');
  });

  it('should contain a link to posts list', () => {
    const newPostLink = el.find('NavItem').at(0);
    expect(newPostLink.html()).to.match(/Posts/);
    expect(newPostLink.prop('href')).to.be.equal('/post');
  });
});
