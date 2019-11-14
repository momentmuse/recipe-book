import React from 'react';
import SearchResults from './../Components/SearchResults';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchResults', () => {
  it('renders the component', () => {
    shallow(<SearchResults />);
  });
});
