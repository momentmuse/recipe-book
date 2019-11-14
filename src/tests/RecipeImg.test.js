import React from 'react';
import RecipeImg from './../Components/RecipeImg';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RecipeImg', () => {
  it('renders the component', () => {
    shallow(<RecipeImg />);
  });
});
