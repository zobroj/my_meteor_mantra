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
    const form = wrapper.find('form').first();
    const textarea = wrapper.find(FormControl).first();

    expect(form.prop('onSubmit')).to.be.a('function');
    expect(textarea.prop('value')).to.be.equal('');
    expect(wrapper.find(Button)).to.have.length(1);
  });

/*
  it('should create a new comment when click on the button', done => {
    const postId = 'the-id';
    const text = 'the-text';

    const onCreate = () => {
      expect(postId).to.be.equal(postId);
      expect(text).to.be.equal(text);
      done();
    };

    const el = shallow(<CommentCreate create={onCreate} postId={postId} />);
    const instance = el.instance();

    instance.refs = {
      text: {value: text}
    };

    el.find('button').simulate('click');
  });
  */
});
