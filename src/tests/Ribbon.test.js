import React from 'react';
import Ribbon from './../Components/Ribbon';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Ribbon', () => {
  it('renders the component', () => {
    shallow(<Ribbon />);
  });
});
