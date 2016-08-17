const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {stub} from 'sinon';
import CommentCreate from '../comment_create';

describe('comments.components.comment_create', () => {
  const actions = {create: stub()};
  const comment = 'the-text';
  const postId = 'the-id';
  const user = {
    id: 'the-user-id',
    username: 'the-username',
  };
  var button; var el; var textarea;
  beforeEach(() => {
    el = shallow(
      <CommentCreate create={actions.create} postId={postId} user={user}/>
    );
    button = el.find('Button').first();
    textarea = el.find('FormControl').first();
  });

  it('contains import components', () => {
    expect(el.find('UseDeps(Container(AuthEnsureUser))'))
      .to.have.length(1);
    expect(el.find('AppErrorMsg')).to.have.length(1);
  });

  it('should display the create comment form', () => {
    expect(textarea.prop('value')).to.be.equal('');
    expect(button.prop('onClick')).to.be.a('function');
  });

  it('should update text-state when text changed', () => {
    const newText = 'hello';
    textarea.simulate('change', {target: {value: newText}});
    expect(el.state('comment'), 'comment').to.be.equal(newText);
  });

  it('should create a new comment when click on the button', () => {
    el.setState({comment});
    button.simulate('click');
    const args = actions.create.args[0];
    expect(args.slice(0,4)).to.deep.equal(
      [ user.id, user.username, postId, comment ]
    );
  });
});
