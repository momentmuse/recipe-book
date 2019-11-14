import React from 'react';
import RecipeCard from './../Components/RecipeCard';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RecipeCard', () => {
  it('renders the component', () => {
    shallow(<RecipeCard />);
  });
});
