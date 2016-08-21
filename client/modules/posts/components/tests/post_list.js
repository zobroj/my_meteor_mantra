const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PostList from '../post_list';

describe('posts.components.post_list', () => {
  const posts = [
    {title: 't-1', _id: 'id-1', username: 'name-1', createdAt: new Date()},
    {title: 't-2', _id: 'id-2', username: 'name-2', createdAt: new Date()},
  ];
  var el; var lis;
  beforeEach(() => {
    el = shallow(<PostList posts={posts} error={null} />);
    lis = el.find('ListGroupItem');
  });

  it('should contain component imports', () => {
    expect(el.find('AppErrorMsg')).to.have.length(1);
  });

  it('should list given number of items', () => {
    expect(el.find('ListGroupItem').length).to.be.equal(posts.length);
  });

  it('should list post title for each item', () => {
    lis.forEach((li, index) => {
      const aText = li.find('a').first().text();
      expect(aText).to.be.equal(posts[index].title);
    });
  });

  it('should list post link for each items', () => {
    lis.forEach((li, index) => {
      const href = li.find('a').first().prop('href');
      expect(href).to.be.equal(`/post/${posts[index]._id}`);
    });
  });

  it('should list post username for each items', () => {
    lis.forEach((li, index) => {
      const pText = li.find('p').first().text();
      expect(pText).to.contain(posts[index].username);
    });
  });

  it('should list post createdAt for each items', () => {
    lis.forEach((li, index) => {
      const pText = li.find('p').first().text();
      expect(pText).to.contain(posts[index].createdAt.toLocaleDateString());
    });
  });
});
