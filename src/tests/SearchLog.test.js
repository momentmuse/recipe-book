import React from 'react';
import SearchLog from './../Components/SearchLog';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const searches = [
  ['banana'],
  ['banana', 'chocolate'],
  ['banana', 'chocolate', 'eggs']
];
const setSeaches = () => {};

describe('SearchLog', () => {
  it('renders the component', () => {
    shallow(<SearchLog searches={searches} setSearches={setSeaches} />);
  });
});
