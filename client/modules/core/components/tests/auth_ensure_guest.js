const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import AuthEnsureGuest from '../auth_ensure_guest';

// if loggedIn
describe('core.components.auth_ensure_guest', () => {
  describe('if user is loggingIn', () => {
    it('should display the loading message', () => {
      const el = mount(<AuthEnsureGuest loggingIn={true}/>);
      const div = el.find('div').first();
      expect(div.html()).to.match(/Loading/);
    });
  });

  describe('if user is loggedIn', () => {
    it('should display AccountLoggedIn component', () => {
      const el = mount(<AuthEnsureGuest loggedIn={true}/>);
      expect(el.find('AccountLoggedIn').length).to.be.equal(1);
    });
  });

  describe('if user is guest (!loggedIn)', () => {
    it('should display the imported child elements', () => {
      const dummyChildren = 'DummyChildren';
      const el = mount(<AuthEnsureGuest
                        loggedIn={false}
                        children={dummyChildren} />);
      const div = el.find('div').first();
      expect(div.html()).to.match(/DummyChildren/);
    });
  });
});
