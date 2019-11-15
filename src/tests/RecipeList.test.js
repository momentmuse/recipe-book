import React from 'react';
import RecipeList from './../Components/RecipeList';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const recipes = [
  {
    title: 'Oh lawd he comin',
    ingredients: ['bananas', 'butter', 'sugar', 'flour', 'eggs'],
    thumbnail: 'cat-eating-cake.jpg',
    href: 'http://www.meowirl.com/'
  },
  {
    title: 'Senpai plz notice me',
    ingredients: ['sugar', 'spice', 'everything nice'],
    thumbnail: 'teehee.jpg',
    href: 'http://www.totallylegitwebsite.com/'
  },
  {
    title: 'this curry is too spicy',
    ingredients: ['send', 'help', 'plz'],
    thumbnail: 'i-cant-feel-my-mouth.jpg',
    href: 'http://www.alittlebitsuspicious.com/'
  }
];

describe('RecipeList', () => {
  it('renders the component', () => {
    shallow(<RecipeList recipes={recipes} />);
  });
  it('should generate as many cards are there are recipes', () => {
    const wrapper = shallow(<RecipeList recipes={recipes} />);
    expect(wrapper.find('.recipe-card').length).toBe(recipes.length);
  });
});
