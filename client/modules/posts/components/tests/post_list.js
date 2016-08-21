const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PostList from '../post_list';

describe('posts.components.post_list', () => {
  const posts = [
    {title: 't-1', _id: 'id-1', username: 'name-1', createdAt: new Date()},
    {title: 't-2', _id: 'id-2', username: 'name-2', createdAt: new Date()},
  ];
  var el;
  beforeEach(() => {
    el = shallow(<PostList posts={posts} error={null} />);
  });

  it('should contain component imports', () => {
    expect(el.find('AppErrorMsg')).to.have.length(1);
  });

  it('should list given number of items', () => {
    expect(el.find('ListGroupItem').length).to.be.equal(posts.length);
  });

  it('should list post title for each item', () => {
    const lis = el.find('ListGroupItem');
    lis.forEach((li, index) => {
      const aText = li.find('a').first().text();
      expect(aText).to.be.equal(posts[index].title);
    });
  });

  it('should list post link for each items', () => {
    const lis = el.find('ListGroupItem');
    lis.forEach((li, index) => {
      const href = li.find('a').first().prop('href');
      expect(href).to.be.equal(`/post/${posts[index]._id}`);
    });
  });
});
