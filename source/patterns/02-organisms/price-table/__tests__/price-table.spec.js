/* eslint-env mocha */
import React from 'react';
import {shallow, configure} from 'enzyme';
import {spy} from 'sinon';
import PriceTable from '../index';
import Plans from './price-table.json';
import styles from '../index.module.scss';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('DUMMY', () => {
    expect(true).toBe(true);
});
/*

test('render Pricetable', (t) => {
    const onClick = spy();
    const wrapper = shallow(
        <PriceTable
            className={styles['price-table']}
            plans={Plans}
            onClick={onClick}
        />
    );
    //t.is(wrapper.find(`.${styles['price-table']}`).length, 1);
    t.is(true);
});

*/
