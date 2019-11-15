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
  it('contains a Heart component', () => {
    const wrapper = shallow(<RecipeCard recipe={recipe} />);
    expect(wrapper.find('Heart').exists()).toBeTruthy();
  });
  it('contains a Ribbon component', () => {
    const wrapper = shallow(<RecipeCard recipe={recipe} />);
    expect(wrapper.find('Ribbon').exists()).toBeTruthy();
  });
  it('contains a RecipeImg component', () => {
    const wrapper = shallow(<RecipeCard recipe={recipe} />);
    expect(wrapper.find('RecipeImg').exists()).toBeTruthy();
  });
  it('should correctly link to the recipe', () => {
    const wrapper = shallow(<RecipeCard recipe={recipe} />);
    expect(wrapper.find('[href="http://www.meowirl.com/"]').length).toBe(1);
  });
  it('should display the title', () => {
    const wrapper = shallow(<RecipeCard recipe={recipe} />);
    expect(wrapper.find('.title').text()).toMatch(recipe.title);
  });
  it('should display the ingredients', () => {
    const wrapper = shallow(<RecipeCard recipe={recipe} />);
    expect(wrapper.find('.ingredients').text()).toMatch(
      recipe.ingredients.join('')
    );
  });
});
