const { describe, it } = global;
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import CommentCreate from '../comment_create';
import AppErrorMsg from '../../../core/components/app_error_msg';

describe('comments.components.comment_create', () => {
  it('contains an <AppErrorMsg/> component', () => {
    const wrapper = shallow(<CommentCreate loggedIn={true} />);
    expect(wrapper.find(AppErrorMsg)).to.have.length(1);
    wrapper.debug();
  });
  /* TODO move this to AppErrorMsg?
  it('should show the error if there are any', () => {
    const error = 'TheError';
    const el = shallow(<CommentCreate error={error} />);
    expect(el.html()).to.match(/TheError/);
  });
  */

  /*
  it('should display the create comment form', () => {
    const el = shallow(<CommentCreate loggedIn="true" />);
    const textarea = el.find('textarea').first();
    const button = el.find('button').first();

    expect(textarea.node.ref).to.be.equal('text');
    expect(button.prop('onClick')).to.be.a('function');
  });
  */

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
