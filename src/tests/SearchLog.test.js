import React from 'react';
import SearchLog from './../Components/SearchLog';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchLog', () => {
  it('renders the component', () => {
    shallow(<SearchLog />);
  });
});
