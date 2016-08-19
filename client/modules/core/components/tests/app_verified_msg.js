const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import {stub} from 'sinon';
import AppVerifiedMsg from '../app_verified_msg';

// if loggedIn
describe('core.components.app_verified_msg', () => {
  describe('if user is !loggedIn', () => {
    it('should display empty <div/>', () => {
      const el = mount(<AppVerifiedMsg loggedIn={false} />);
      expect(el.find('div').length).to.be.equal(1);
    });
  });

  describe('if user is loggedIn and emailVerified', () => {
    it('should display empty <div/>', () => {
      const el = mount(<AppVerifiedMsg
                        loggedIn={true}
                        emailVerified={true} />);
      expect(el.find('div').length).to.be.equal(1);
    });
  });

  describe('if user is loggedIn but !emailVerified', () => {
    const actions = {resendVerificationEmail: stub()};
    var el;
    // var link;
    beforeEach(() => {
      el = mount(<AppVerifiedMsg
        resendVerificationEmail={actions.resendVerificationEmail}
        loggedIn={true}
        emailVerified={false} />);
      // link = el.find('');
    });

    it('should show link if not recently clicked');
    it('should not show link if not recently clicked');

    it('should call method on link click', () => {
      console.log(el.debug())
    });

  })
});
