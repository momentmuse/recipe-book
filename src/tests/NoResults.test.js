import React from 'react';
import NoResults from './../Components/NoResults';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('NoResults', () => {
  it('renders the component', () => {
    shallow(<NoResults />);
  });
  it('should contain a no results message', () => {
    const wrapper = shallow(<NoResults />);
    expect(wrapper.find('.no-results').exists()).toBeTruthy();
  });
});
