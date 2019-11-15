import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders the component', () => {
    shallow(<App />);
  });
  it('contains a header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toBeTruthy();
  });
  it('contains a hero component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Hero').exists()).toBeTruthy();
  });
  it('contains a search form component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('SearchForm').exists()).toBeTruthy();
  });
  it('contains a search results component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('SearchResults').exists()).toBeTruthy();
  });
  // it('matches the snapshot', () => {
  //   const tree = shallow(<App />);
  //   expect(toJson(tree)).toMatchSnapshot();
  // });
});
