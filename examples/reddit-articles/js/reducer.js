const initialState = {
    item: [{
        index:0,
        vote:0,
        content:"Why are we using React.js in our projects?"
    },{
        index:1,
        vote:0,
        content:"Approaches to testing React components"
    },{
        index:2,
        vote:0,
        content:"What React component class syntax should I use?"
    }]
};

const reducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);
    switch (action.type){
        case "UP_VOTE":
            ++newState.item.find((item)=>item.index==action.index).vote;
            return newState;
        case "DOWN_VOTE":
            --newState.item.find((item)=>item.index==action.index).vote;
            return newState;
    }
    return state;
};

export default reducer;