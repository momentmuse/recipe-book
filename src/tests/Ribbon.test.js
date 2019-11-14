import React from 'react';
import Ribbon from './../Components/Ribbon';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const recipe = {
  title: 'Oh lawd he comin',
  ingredients: ['bananas', 'butter', 'sugar', 'flour', 'eggs'],
  thumbnail: 'cat-eating-cake.jpg',
  href: 'http://www.meowirl.com/'
};

const lactose = {
  title: 'cheese',
  ingredients: ['cheese'],
  thumbnail: 'it-is-a-cheese.jpg',
  href: 'http://cheese.cheese.chz/'
};

describe('Ribbon', () => {
  it('renders the component', () => {
    shallow(<Ribbon recipe={recipe} />);
  });
});
