const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LayoutMain from '../layout_main';
import NavbarMain from '../../../core/components/navbar_main';

describe('core.components.layout_main', () => {
  it('should contain navigation', () => {
    const el = shallow(<LayoutMain />);
    expect(el.contains(<NavbarMain />)).to.be.equal(true);
  });

  it('should render childrens', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <LayoutMain content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
