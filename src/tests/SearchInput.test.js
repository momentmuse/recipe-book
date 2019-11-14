import React from 'react';
import SearchInput from './../Components/SearchInput';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchInput', () => {
  it('renders the component', () => {
    shallow(<SearchInput />);
  });
});
