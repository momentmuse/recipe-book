import React from 'react';
import Hero from './../Components/Hero';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Hero', () => {
  it('renders the component', () => {
    shallow(<Hero />);
  });
  it('contains a hero logo', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper.find('.hero-logo').exists()).toBeTruthy();
  });
  it('returns a speech bubble message', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper.find('.speech-bubble').text()).toBeTruthy();
  });
});
