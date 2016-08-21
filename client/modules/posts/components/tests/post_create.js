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

/*
  it('should create a new post when click on the button', done => {
    const title = 'the-title';
    const content = 'the-content';

    const onCreate = (t, c) => {
      expect(t).to.be.equal(title);
      expect(c).to.be.equal(content);
      done();
    };

    const el = shallow(<PostCreate create={onCreate} />);
    const instance = el.instance();

    instance.refs = {
      titleRef: {value: title},
      contentRef: {value: content}
    };

    el.find('form').simulate('submit');
  });
  */
});
