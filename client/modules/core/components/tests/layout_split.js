const {beforeEach, describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import { AppVerifiedMsg, NavbarMain } from '/client/configs/components';
import LayoutSplit from '../layout_split';

// if loggedIn
describe('core.components.layout_split', () => {
  it('should contain component imports', () => {
    const el = shallow(<LayoutSplit />);
    expect(el.contains(<NavbarMain/>)).to.be.equal(true);
    expect(el.contains(<AppVerifiedMsg/>)).to.be.equal(true);
  });

  it('should render children', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <LayoutSplit content={() => (<Comp />)}/>
    );
    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
