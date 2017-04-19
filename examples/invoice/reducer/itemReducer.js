const initState = {
    data: [{
        name: "",
        price: 0,
        amount: 0,
        visible: true
    }]
};

const itemReducer = (state = initState, action)=>{
    switch (action.type){
        case "ADD_ITEM":
            state = {...state};
            state.data.push({
                name: "",
                price: 0,
                amount: 0,
                visible: true
            });
            return state;
        case "DELETE_ITEM":
            state = {...state};
            state.data[action.index].visible = false;
            return state;
        case "DATA_UPDATE":
            state = {...state};
            state.data[action.index] = {...state.data[action.index], ...action.content};
            return state;
        default:
            return {...state};
    }
};

export default itemReducer;
