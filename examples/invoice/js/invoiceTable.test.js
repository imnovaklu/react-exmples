import React from 'react';
import {shallow} from 'enzyme';
import invoiceTable from './invoiceTable';
import itemReducer from '../reducer/itemReducer';

describe('Test Components', () => {
    it('should add one row', () => {
        var store = itemReducer(undefined, { type: "ADD_ITEM" });
        const table = shallow(<invoiceTable/>);
        expect(table.find('tbody').find('tr').length).toEqual(1);
    });
});