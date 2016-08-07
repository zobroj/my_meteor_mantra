/*
const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import CreateComment from '../comment_create';

describe('comments.components.comment_create', () => {
  it('should show the error if there are any', () => {
    const error = 'TheError';
    const el = shallow(<CommentCreate error={error} />);
    expect(el.html()).to.match(/TheError/);
  });

  it('should display the create comment form', () => {
    const el = shallow(<CommentCreate />);
    const textarea = el.find('textarea').first();
    const button = el.find('button').first();

    expect(textarea.node.ref).to.be.equal('text');
    expect(button.prop('onClick')).to.be.a('function');
  });

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
});
*/
