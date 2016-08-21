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
    console.log(el.debug())
  });
/*
  it('should display the post title', () => {
    const el = shallow(<PostSingle post={post} />);
    expect(el.find('h2').text()).to.be.match(/Nice One/);
  });

  it('should display the post content', () => {
    const post = {content: 'Nice content'};
    const el = shallow(<PostSingle post={post} />);
    expect(el.find('p').text()).to.be.match(/Nice content/);
  });

  it('should display saving indicator if saving prop is there', () => {
    const post = {saving: true};
    const el = shallow(<PostSingle post={post} />);
    expect(el.find('p').first().text()).to.be.match(/saving/i);
  });
*/
});
