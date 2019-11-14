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
  it('returns hasLactose as true only when recipe ingredients contain milk, yogurt, or cheese', () => {
    const wrapper = shallow(<Ribbon recipe={recipe} />);
    expect(wrapper.find('.ribbon-right').prop('hasLactose')).toBeFalsy();
    wrapper.setProps({ recipe: lactose });
    expect(wrapper.find('.ribbon-right').prop('hasLactose')).toBeTruthy();
  });
  it('contains one span element', () => {
    const wrapper = shallow(<Ribbon recipe={recipe} />);
    expect(wrapper.find('.ribbon-span').exists()).toBeTruthy();
  });
  it('has a span with inner text of has lactose', () => {
    const wrapper = shallow(<Ribbon recipe={recipe} />);
    expect(wrapper.find('.ribbon-span').text()).toMatch('Has Lactose');
  });
});
