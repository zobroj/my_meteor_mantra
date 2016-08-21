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
  var el;
  beforeEach(() => {
    el = shallow(
      <PostCreate create={actions.create} user={user} />);
  });

  it('should contain component imports', () => {
    expect(el.find('UseDeps(Container(AuthEnsureUser))'))
      .to.have.length(1);
    expect(el.find('AppErrorMsg')).to.have.length(1);
  });

/*
  it('should show the error if there are any', () => {
    const error = 'TheError';
    const el = shallow(<PostCreate error={error} />);
    expect(el.html()).to.match(/TheError/);
  });

  it('should display the create post form', () => {
    const el = shallow(<PostCreate />);
    const title = el.find('input').first();
    const content = el.find('textarea').first();
    const form = el.find('form').first();

    expect(title.node.ref).to.be.equal('titleRef');
    expect(content.node.ref).to.be.equal('contentRef');
    expect(form.prop('onSubmit')).to.be.a('function');
  });

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
