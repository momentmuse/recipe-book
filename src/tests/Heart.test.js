import React from 'react';
import Heart from './../Components/Heart';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Heart', () => {
  it('renders the component', () => {
    shallow(<Heart />);
  });
});
