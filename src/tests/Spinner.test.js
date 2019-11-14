import React from 'react';
import Spinner from './../Components/Spinner';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Spinner', () => {
  it('renders the component', () => {
    shallow(<Spinner />);
  });
  it('should return an svg', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find('svg').exists()).toBeTruthy();
  });
});
