import React from 'react';
import SearchForm from './../Components/SearchForm';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchForm', () => {
  it('renders the component', () => {
    shallow(<SearchForm />);
  });
});
