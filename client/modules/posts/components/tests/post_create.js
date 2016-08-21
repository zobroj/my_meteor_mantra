const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {stub} from 'sinon';
import PostCreate from '../post_create';

describe('posts.components.post_create', () => {
  const actions = {create: stub()};
  const title = 'the-title';
  const text = 'the-text';
  const user = {
    id: 'the-user-id',
    username: 'the-username'
  };
  var button; var el; var form; var titleInput; var textInput;
  beforeEach(() => {
    el = shallow(
      <PostCreate create={actions.create} user={user} />);
    form = el.find('form#post-create-form').first();
    titleInput = form.find('.title-input FormControl');
    textInput = form.find('.text-input FormControl');
    button = form.find('Button').first();
  });

  it('should contain component imports', () => {
    expect(el.find('UseDeps(Container(AuthEnsureUser))'))
      .to.have.length(1);
    expect(el.find('AppErrorMsg')).to.have.length(1);
  });

  it('should display the create post form', () => {
    expect(titleInput.prop('value')).to.be.equal('');
    expect(textInput.prop('value')).to.be.equal('');
    expect(button.prop('onClick'), 'button').to.be.a('function');
  });

  it('should handle text-state changes', () => {
    titleInput.simulate('change', {target: {value: title}});
    expect(el.state('title'), 'title').to.be.equal(title);
    textInput.simulate('change', {target: {value: text}});
    expect(el.state('text'), 'text').to.be.equal(text);
  });

  it('should call create method on button click', () => {
    el.setState({title, text});
    button.simulate('click');
    const args = actions.create.args[0];
    expect(args.slice(0,4)).to.deep.equal(
      [ user.id, user.username, title, text ]
    );
  });
});
