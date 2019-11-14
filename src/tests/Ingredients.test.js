import React from 'react';
import Ingredients from './../Components/Ingredients';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Ingredients', () => {
  it('renders the component', () => {
    shallow(<Ingredients />);
  });
  it('should contain the ingredient buttons component', () => {
    const wrapper = shallow(<Ingredients />);
    expect(wrapper.find('IngredientButton').exists()).toBeTruthy();
  });
});
