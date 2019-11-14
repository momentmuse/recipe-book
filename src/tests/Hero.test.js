import React from 'react';
import Hero from './../Components/Hero';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Hero', () => {
  it('renders the component', () => {
    shallow(<Hero />);
  });
});
