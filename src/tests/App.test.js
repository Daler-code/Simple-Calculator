import React from 'react';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Calculator from '../components/Calculator';
import sinon from 'sinon';


configure({
  adapter: new Adapter
});


describe('<Calculator />', () => {
  let wrapper = mount(<Calculator />);

  beforeEach(() => {
    wrapper.setProps({
      calcuateSqrt: sinon.spy(),
      calcuateExp: sinon.spy(),
      calculate: sinon.spy(),
      reset: sinon.spy(),
      backspace: sinon.spy()
    })
  });


  it('renders and mounts the app without error', () => {
    sinon.spy(Calculator.prototype, 'componentDidMount');
    mount(<Calculator />);

    expect(Calculator.prototype.componentDidMount.calledOnce).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('calls the calculate action on keypad click', () => {
    wrapper.find('button[name="5"]').simulate('click');
    expect(wrapper.prop('calculate').calledWith('5')).toBeTruthy();
    expect(wrapper.prop('calculateSqrt').calledWith('5')).toBeTruthy();
    expect(wrapper.prop('calculateExp').calledWith('5')).toBeTruthy();

    wrapper.find('button[name="*"]').simulate('click');
    expect(wrapper.prop('calculate').calledWith('5')).toBeTruthy();
    expect(wrapper.prop('calculateSqrt').calledWith('5')).toBeTruthy();
    expect(wrapper.prop('calculateExp').calledWith('5')).toBeTruthy();

    wrapper.find('button[name="5"]').simulate('click');
    expect(wrapper.prop('calculate').calledWithExactly('5')).toBeTruthy();
    expect(wrapper.prop('calculateSqrt').calledWithExactly('5')).toBeTruthy();
    expect(wrapper.prop('calculateExp').calledWithExactly('5')).toBeTruthy();


    expect(wrapper.prop('calculate').callCount).toBe(3);
    expect(wrapper.prop('reset').notCalled).toBeTruthy();
    expect(wrapper.prop('backspace').notCalled).toBeTruthy();
  });


  it('calls the evalute action, on keypad "=" click', () => {
    wrapper.find('button[name="="]').simulate('click');

    expect(wrapper.prop('calculate').calledOnce).toBeTruthy();
    expect(wrapper.prop('calculateSqrt').calledOnce).toBeTruthy();
    expect(wrapper.prop('calculateExp').calledOnce).toBeTruthy();
    expect(wrapper.prop('reset').notCalled).toBeTruthy();
    expect(wrapper.prop('backspace').notCalled).toBeTruthy();
  });


  it('calls reset action on keypad "C" click', () => {
    wrapper.find('button[name="c"]').simulate('click');

    expect(wrapper.prop('reset').calledOnce).toBeTruthy();
    expect(wrapper.prop('calculate').notCalled).toBeTruthy();
    expect(wrapper.prop('calculateSqrt').notCalled).toBeTruthy();
    expect(wrapper.prop('backspace').notCalled).toBeTruthy()
  });


  it('calls Del action on keypad "CE" click', () => {
    wrapper.find('button[name="CE"]').simulate('click');

    expect(wrapper.prop('backspace').calledOnce).toBeTruthy();
    expect(wrapper.prop('reset').notCalled).toBeTruthy();
    expect(wrapper.prop('calculate').notCalled).toBeTruthy();
    expect(wrapper.prop('calculateSqrt').notCalled).toBeTruthy();
  });

});