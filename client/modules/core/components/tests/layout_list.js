const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LayoutList from '../layout_list';
import { AppVerifiedMsg, NavbarMain } from '/client/configs/components';

describe('core.components.layout_list', () => {
  it('should contain component imports', () => {
    const el = shallow(<LayoutList />);
    expect(el.contains(<NavbarMain/>)).to.be.equal(true);
    expect(el.contains(<AppVerifiedMsg/>)).to.be.equal(true);
  });

  it('should render children', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <LayoutList content={() => (<Comp />)}/>
    );
    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
