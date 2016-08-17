const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import { shallow } from 'enzyme';
import CommentList from '../comment_list';

describe('comments.components.comment_list', () => {
  let el; let divs;
  const comments = [
    {_id: 'one', username: 'u-1', text: 't-1', createdAt: new Date(), saving: true },
    {_id: 'two', username: 'u-2', text: 't-2', createdAt: new Date(), saving: false },
    {_id: 'three', username: 'u-3', text: 't-3', createdAt: new Date(), saving: true },
    {_id: 'four', username: 'u-4', text: 't-4', createdAt: new Date(), saving: false }
  ];
  beforeEach(() => {
    el = shallow(<CommentList comments={comments}/>);
    divs = el.find('.comment');
  });

  it('should list given number of items', () => {
    expect(divs.length).to.be.equal(comments.length);
  });

  it('should list comment author for each item', () => {
    divs.forEach((div, i) => {
      const username = div.find('strong').first().text();
      expect(username).to.be.equal(comments[i].username);
    });
  });

  it('should list comment text for each item', () => {
    divs.forEach((div, i) => {
      const text = div.find('p').first().text();
      expect(text).to.have.string(comments[i].text);
    });
  });

  it('should list saving status for each item', () => {
    divs.forEach((div, i) => {
      const text = div.html();
      if (comments[i].saving) {
        expect(text).to.have.string('saving');
      }
    });
  });
});
