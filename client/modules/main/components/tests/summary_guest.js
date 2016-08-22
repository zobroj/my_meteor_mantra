const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
// import {spy} from 'sinon';
import SummaryGuest from '../summary_guest';

describe('main.components.summary_guest', () => {
  it('should contain a button', () => {
    const el = shallow(<SummaryGuest/>);
    const button = el.find('Button').first();
    expect(button.html()).to.match(/Posts/);
  });
});
