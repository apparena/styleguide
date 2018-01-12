/* eslint-env mocha */
import React from 'react';
import {test} from 'ava';
import {shallow, configure} from 'enzyme';
import Dropdown from '../dropdown';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('renders a dropdown', (t) => {
    const wrapper = shallow(
        <Dropdown>
            <ul className="dropdown-menu">
                <li className="dropdown-item">1</li>
                <li className="dropdown-item">2</li>
            </ul>
        </Dropdown>
    );
    console.log(wrapper.html())
    t.is(wrapper.find('span').length, 1);
    t.is(wrapper.find('li').length, 2);
});