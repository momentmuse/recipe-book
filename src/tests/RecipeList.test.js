import React from 'react';
import RecipeList from './../Components/RecipeList';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RecipeList', () => {
  it('renders the component', () => {
    shallow(<RecipeList />);
  });
});
