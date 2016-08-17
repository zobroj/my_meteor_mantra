const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {stub} from 'sinon';
import AccountPreferences from '../account_preferences';

// if loggedIn
describe('core.components.account_preferences', () => {
  const user = {
    email: 'the-email',
    username: 'the-username',
    id: 'the-id',
  };

  it('should have component imports', () => {
    const el = shallow(<AccountPreferences user={user} />);
    expect(el.find('UseDeps(Container(AuthEnsureUser))')).to.have.length(1);
  });

  it('should display user information', () => {
    const el = shallow(<AccountPreferences user={user} />);
    const ul = el.find('.userInfo');
    expect(ul.find('li#email').text()).to.have.string(user.email);
    expect(ul.find('li#username').text()).to.have.string(user.username);
    expect(ul.find('li#id').text()).to.have.string(user.id);
  });

  it('should display delete account button', () => {
    const el = shallow(<AccountPreferences user={user} />);
    const button = el.find('Button').first();
    expect(button.prop('onClick')).to.be.a('function');
  });
});
