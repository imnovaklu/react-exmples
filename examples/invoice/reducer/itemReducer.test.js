import itemReducer from './itemReducer';

describe('Test Reducers', () => {
    it('should return the initial state', () => {
        expect(itemReducer(undefined, {type:"NONE"})).toEqual({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            }]
        })
    });

    it('should handle ADD_ITEM', () => {
        expect(itemReducer(undefined, {
            type: "ADD_ITEM"
        })).toEqual({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            },{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            }]
        });

        expect(itemReducer({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            }]
        }, {
            type: "ADD_ITEM"
        })).toEqual({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            },{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            }]
        });
    });

    it('should handle DELETE_ITEM', () => {
        expect(itemReducer({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            },{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            }]
        }, {
            type: "DELETE_ITEM",
            index: 0
        })).toEqual({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: false
            },{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            }]
        });

        expect(itemReducer({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            },{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            }]
        }, {
            type: "DELETE_ITEM",
            index: 1
        })).toEqual({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            },{
                name: "",
                price: 0,
                amount: 0,
                visible: false
            }]
        });
    });

    it('should handle DATA UPDATE', () => {
        expect(itemReducer({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            }]
        }, {
            type: "DATA_UPDATE",
            index: 0,
            content: {price: 10}
        })).toEqual({
            data: [{
                name: "",
                price: 10,
                amount: 0,
                visible: true
            }]
        });

        expect(itemReducer({
            data: [{
                name: "",
                price: 0,
                amount: 0,
                visible: true
            },{
                name: "",
                price: 20,
                amount: 10,
                visible: true
            }]
        }, {
            type: "DATA_UPDATE",
            index: 0,
            content: {amount: 60}
        })).toEqual({
            data: [{
                name: "",
                price: 0,
                amount: 60,
                visible: true
            },{
                name: "",
                price: 20,
                amount: 10,
                visible: true
            }]
        });
    })
});