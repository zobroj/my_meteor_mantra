const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {stub} from 'sinon';
import AccountPreferences from '../account_preferences';

// if loggedIn
describe('core.components.account_preferences', () => {
  const actions = {deleteAccount: stub()};
  const user = {
    email: 'the-email',
    username: 'the-username',
    id: 'the-id',
  };
  let el;
  let button;
  beforeEach(() => {
    el = shallow(<AccountPreferences
                  deleteAccount={actions.deleteAccount}
                  user={user} />);
    button = el.find('Button').first();
  });

  it('should have component imports', () => {
    expect(el.find('UseDeps(Container(AuthEnsureUser))')).to.have.length(1);
  });

  it('should display user information', () => {
    const ul = el.find('.userInfo');
    expect(ul.find('li#email').text()).to.have.string(user.email);
    expect(ul.find('li#username').text()).to.have.string(user.username);
    expect(ul.find('li#id').text()).to.have.string(user.id);
  });

  it('should contain delete account button', () => {
    expect(button.prop('onClick')).to.be.a('function');
  });

  it('should call delete method on button click', () => {
    button.simulate('click');
    const args = actions.deleteAccount.args[0];
    expect(args.slice(0,1)).to.deep.equal([ user.id ]);
  });
});
