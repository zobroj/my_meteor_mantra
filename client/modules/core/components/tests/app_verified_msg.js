const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {mount} from 'enzyme';
import {assert, stub} from 'sinon';
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
    var link;
    beforeEach(() => {
      el = mount(<AppVerifiedMsg
        resendVerificationEmail={actions.resendVerificationEmail}
        loggedIn={true}
        emailVerified={false} />);
      link = el.find('a');
    });

    it('should display link by default', () => {
      expect(el.state('resendLinkClicked')).to.be.equal(false);
      expect(link.length).to.be.equal(1);
      expect(link.prop('onClick')).to.be.a('function');
    });

    it('should hide link if recently clicked', () => {
      el.setState({resendLinkClicked: true});
      expect(link.prop('onClick')).to.be.a('undefined');
    });

    it('should call method on link click', () => {
      expect(el.state('resendLinkClicked')).to.be.equal(false);
      link.simulate('click');
      expect(el.state('resendLinkClicked')).to.be.equal(true);
      assert.calledOnce(el.prop('resendVerificationEmail'));
    });

    /* TODO test for this case */
    it('should allow link to be resent after 60sec');
  });
});
