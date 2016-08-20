const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {AppVerifiedMsg, Footer, NavbarMain} from '/client/configs/components';
import LayoutMain from '../layout_main';

describe('core.components.layout_main', () => {
  it('should contain component imports', () => {
    const el = shallow(<LayoutMain />);
    expect(el.contains(<AppVerifiedMsg/>)).to.be.equal(true);
    expect(el.contains(<Footer/>)).to.be.equal(true);
    expect(el.contains(<NavbarMain/>)).to.be.equal(true);
  });

  it('should render jumbotron', () => {
    const JumboTron = () => (<p>Goodbye</p>);
    const el = shallow(
      <LayoutMain jumbotron={() => (<JumboTron />)}/>
    );

    expect(el.contains(<JumboTron />)).to.be.equal(true);
  });

  it('should render childrens', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <LayoutMain content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
