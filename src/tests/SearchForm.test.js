import React from 'react';
import SearchForm from './../Components/SearchForm';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchForm', () => {
  it('renders the component', () => {
    shallow(<SearchForm />);
  });
  it('contains a SearchInput component', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find('SearchInput').exists()).toBeTruthy();
  });
  it('contains an search button', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find('.btn').text()).toMatch(
      `Let's get cooking!`.toUpperCase()
    );
  });
  it('contains an Ingredients component', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find('Ingredients').exists()).toBeTruthy();
  });
  it('contains an SearchLog component if searches.length > 0', () => {
    const wrapper = shallow(<SearchForm searches={[['hey'], ['tacos']]} />);
    expect(wrapper.find('SearchLog').exists()).toBeTruthy();
  });
});
