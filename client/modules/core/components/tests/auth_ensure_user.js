const {describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import AuthEnsureUser from '../auth_ensure_user';

// if loggedIn
describe('core.components.auth_ensure_user', () => {
  describe('if user is loggingIn', () => {
    it('should display loadingComponent', () => {
      const el = mount(<AuthEnsureUser loggingIn={true}/>);
      const div = el.find('div').first();
      expect(div.html()).to.match(/Loading/);
    });
  });

  describe('if user is loggedIn and emailVerified', () => {
    it('should display children', () => {
      const dummyChildren = 'DummyChildren';
      const el = mount(<AuthEnsureUser
                        loggedIn={true}
                        emailVerified={true}
                        children={dummyChildren} />);
      const div = el.find('div').first();
      expect(div.html()).to.match(/DummyChildren/);
    });
  });
  describe('if user is loggedIn and !emailVerified', () => {
    it('should display unverifiedComponent', () => {
      const el = mount(<AuthEnsureUser
                        loggedIn={true}
                        emailVerified={false} />);
      const div = el.find('div').first();
      expect(div.html()).to.match(/unverified users/);
    });
  });
  describe('if guest', () => {
    it('should display guestComponent', () => {
      const el = mount(<AuthEnsureUser loggedIn={false}/>);
      const div = el.find('div').first();
      expect(div.html()).to.match(/Please log in/);
    });
  });
});
