import React from 'react';
import RecipeCard from './../Components/RecipeCard';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const recipe = {
  title: 'Oh lawd he comin',
  ingredients: ['bananas', 'butter', 'sugar', 'flour', 'eggs'],
  thumbnail: 'cat-eating-cake.jpg',
  href: 'http://www.meowirl.com/'
};

describe('RecipeCard', () => {
  it('renders the component', () => {
    shallow(<RecipeCard recipe={recipe} />);
  });
});
