import React from 'react';
import IngredientButton from './../Components/IngredientButton';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('IngredientButton', () => {
  it('renders the component', () => {
    shallow(<IngredientButton />);
  });
});
