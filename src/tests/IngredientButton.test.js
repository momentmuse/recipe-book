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
  it('should generate as many buttons are there are ingredients', () => {
    const wrapper = shallow(<IngredientButton searches={searches} />);
    expect(wrapper.find('.ingredient-btn').length).toBe(searches.length);
  });
  it('should generate the ingredient name in the button', () => {
    const wrapper = shallow(<IngredientButton searches={[['hello']]} />);
    expect(wrapper.find('.ingredient-btn').text()).toMatch('hello');
  });
});
