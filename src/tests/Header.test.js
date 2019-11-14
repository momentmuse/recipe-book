import React from 'react';
import Header from './../Components/Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('renders the component', () => {
    shallow(<Header />);
  });
});
