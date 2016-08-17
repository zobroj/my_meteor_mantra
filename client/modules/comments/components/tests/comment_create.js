const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CommentCreate from '../comment_create';

describe('comments.components.comment_create', () => {
  it('contains import components', () => {
    const el = shallow(<CommentCreate />);
    expect(el.find('UseDeps(Container(AuthEnsureUser))'))
      .to.have.length(1);
    expect(el.find('AppErrorMsg')).to.have.length(1);
  });

  it('should display the create comment form', () => {
    const el = shallow(<CommentCreate />);
    const textarea = el.find('FormControl').first();
    const button = el.find('Button').first();
    expect(textarea.prop('value')).to.be.equal('');
    expect(button.prop('onClick')).to.be.a('function');
  });

  it('should update text-state when text changed', () => {
    const newText = 'hello';
    const el = shallow(<CommentCreate />);
    const textarea = el.find('FormControl').first();
    textarea.simulate('change', {target: {value: newText}});
    expect(el.state('comment')).to.be.equal(newText);
  });

  it('should create a new comment when click on the button', done => {
    const postId = 'the-id';
    const comment = 'the-text';
    const user = {
      id: 'the-user-id',
      username: 'the-username',
    };

    const onCreate = () => {
      expect(postId).to.be.equal(postId);
      expect(user.id).to.be.equal(user.id);
      expect(user.username).to.be.equal(user.username);
      expect(comment).to.be.equal(comment);
      done();
    };

    const wrapper = shallow(
      <CommentCreate create={onCreate} postId={postId} user={user}/>
    );
    wrapper.setState({ comment });

    const button = wrapper.find('Button').first();
    button.simulate('click');
  });

});
