/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {mount} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import Input from '../input';

test('is focused by default', () => {
    const onChange = spy();
    const wrapper = mount(
        <Input onChange={onChange}/>
    );
    expect(wrapper.find('input').node).to.equal(document.activeElement);
});

test('accepts custom functions', () => {
    const onChange = spy();
    const wrapper = mount(
        <Input onChange={onChange}/>
    );
    wrapper.find('input').simulate('change', {target: {value: 'My old value'}})
        .simulate('change', {target: {value: 'My new value'}});
    expect(onChange).to.have.property('callCount', 2);
});