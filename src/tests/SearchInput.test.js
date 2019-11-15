import React from 'react';
import SearchInput from './../Components/SearchInput';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchInput', () => {
  it('renders the component', () => {
    shallow(<SearchInput />);
  });
  it('should return a text input', () => {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper.find('[type="text"]').exists()).toBeTruthy();
  });
  it('should have property name equals ingredient', () => {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper.find('[name="ingredient"]').exists()).toBeTruthy();
  });
  it('should display the bound text value from props', () => {
    const wrapper = shallow(<SearchInput values={{ ingredient: 'rofl' }} />);
    expect(wrapper.find('[value="rofl"]').exists()).toBeTruthy();
  });
  it('should have the className is-invalid if there is an error', () => {
    const wrapper = shallow(<SearchInput errors={{ ingredient: 'lol' }} />);
    expect(
      wrapper.find('[className="ingredient-input is-invalid"]').exists()
    ).toBeTruthy();
  });
  it('returns an error message if there is an error', () => {
    const wrapper = shallow(<SearchInput errors={{ ingredient: 'lol' }} />);
    expect(wrapper.find('.invalid-message').text()).toMatch('lol');
  });
});
