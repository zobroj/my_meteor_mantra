const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AppErrorMsg from '../app_error_msg';

describe('core.components.app_error_msg', () => {
  it('should show the error if there are any', () => {
    const error = 'TheError';
    const el = shallow(<AppErrorMsg error={error} />);
    expect(el.html()).to.match(/TheError/);
  });
});
