const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import {stub} from 'sinon';
import AppVerifiedMsg from '../app_verified_msg';

// if loggedIn
describe('core.components.app_verified_msg', () => {
  describe('if !loggedIn or emailVerified', () => {
    it('should not display nothing');
  });

  describe('if user is loggedIn but !emailVerified', () => {
    const actions = {resendVerificationEmail: stub()};
    var el;
    // var link;
    beforeEach(() => {
      el = shallow(<AppVerifiedMsg
        resendVerificationEmail={actions.resendVerificationEmail}/>);
      // link = el.find('');
    });

    it('should show link if not recently clicked');
    it('should not show link if not recently clicked');

    it('should call method on link click', () => {
      console.log(el.debug())
      const la = mount(<AppVerifiedMsg
        resendVerificationEmail={actions.resendVerificationEmail}
        loggedIn={true}
        emailVerified={false} />);
      console.log(la.debug())
    });

  })
});
