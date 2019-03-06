import Button from '../components/Button';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('Button', ()=> {

it('button is defined or not' , ()=> {

expect(Button).toBeDefined();

})


describe('Button Snapshot', ()=> {

it('button on UI' , ()=> {

var tree = shallow(<Button/>)
expect(tree).toMatchSnapshot();

})

})

describe('Testing the app component', ()=> {

it('test heading' , ()=> {

var wrapper = shallow(<Button />);

expect(wrapper.contains(<h1>Hello shankar </h1>)).toBe(true);

})

})

})
