const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PostSingle from '../post_single';

describe('posts.components.post_single', () => {
  const post = {
    title: 'Nice One',
    username: 'the-username',
    text: 'the-text',
    _id: 'the-id',
    createdAt: new Date(),
  };
  var el;
  beforeEach(() => {
    el = shallow(<PostSingle post={post} />);
  });

  it('should contain component imports', () => {
    expect(el.find('UseDeps(Container(CommentList))')).to.have.length(1);
  });

  it('should display the post content', () => {
    expect(el.find('PageHeader').html(), 'title').to.be.match(/Nice One/);
    expect(el.find('p#post-info', 'username')
      .text()).to.be.match(/the-username/);
    expect(el.find('p#post-info', 'createdAt')
      .text()).to.contain(post.createdAt.toLocaleDateString());
    expect(el.find('p#post-text', 'text')
      .text()).to.be.match(/the-text/);
  });
});
