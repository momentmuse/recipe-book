import React from 'react';
import IngredientButton from './../Components/IngredientButton';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const searches = [
  ['cheese'],
  ['cheese', 'potato'],
  ['cheese', 'potato', 'tomato']
];
const setSeaches = () => {};

describe('IngredientButton', () => {
  it('renders the component', () => {
    shallow(<IngredientButton searches={searches} setSearches={setSeaches} />);
  });
});
