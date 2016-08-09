const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CommentCreate from '../comment_create';
import { AppErrorMsg } from '/client/configs/components';
import { Button, FormControl } from 'react-bootstrap';

describe('comments.components.comment_create', () => {
  it('contains an <AppErrorMsg/> component', () => {
    const wrapper = shallow(<CommentCreate />);
    expect(wrapper.find(AppErrorMsg)).to.have.length(1);
  });

  it('should display the create comment form', () => {
    const wrapper = shallow(<CommentCreate />);
    const textarea = wrapper.find(FormControl).first();
    const button = wrapper.find(Button).first();

    expect(textarea.prop('value')).to.be.equal('');
    expect(button.prop('onClick')).to.be.a('function');
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
      expect(comment).to.be.equal(comment);
      done();
    };

    const wrapper = shallow(
      <CommentCreate create={onCreate} postId={postId} user={user}/>
    );
    wrapper.setState({ comment });

    const button = wrapper.find(Button).first();
    button.simulate('click');
  });

});
