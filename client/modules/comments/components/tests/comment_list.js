const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import CommentList from '../comment_list';
import { ListGroupItem } from 'react-bootstrap';

describe('comments.components.comment_list', () => {
  const comments = [
    {_id: 'one', username: 'u-1', text: 't-1', createdAt: new Date(), saving: true },
    {_id: 'two', username: 'u-2', text: 't-2', createdAt: new Date(), saving: false },
    {_id: 'three', username: 'u-3', text: 't-3', createdAt: new Date(), saving: true },
    {_id: 'four', username: 'u-4', text: 't-4', createdAt: new Date(), saving: false }
  ];

  it('should list given number of items', () => {
    const el = shallow(<CommentList comments={comments}/>);
    expect(el.find('.comment').length).to.be.equal(comments.length);
  });

  it('should list comment author for each item', () => {
    const el = shallow(<CommentList comments={comments}/>);
    const divs = el.find('.comment');
    divs.forEach((div, i) => {
      const username = div.find('strong').first().text();
      expect(username).to.be.equal(comments[i].username);
    });
  });

  it('should list comment text for each item', () => {
    const el = shallow(<CommentList comments={comments}/>);
    const divs = el.find('.comment');
    divs.forEach((div, i) => {
      const text = div.find('p').first().text();
      expect(text).to.have.string(comments[i].text);
    });
  });

/* TODO add test for saving status
  it('should list saving status for each item', () => {
    const el = shallow(<CommentList comments={comments}/>);
    const divs = el.find('.comment');
    divs.forEach((div, i) => {
      const text = div.find(ListGroupItem).text();
      if (comments[i].saving) {
        expect(text).to.match(/\.\.\.$/);
      }
    });
  });
*/
});
