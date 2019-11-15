import React from 'react';
import SearchResults from './../Components/SearchResults';
import Spinner from './../Components/Spinner';
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
    href: 'http://www.nosslcertificatelol.com/'
  }
];

describe('SearchResults', () => {
  it('renders the component', () => {
    shallow(<SearchResults recipes={recipes} />);
  });
});
