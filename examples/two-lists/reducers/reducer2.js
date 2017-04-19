const initState = [1,2,3,4,5,6];

const reducer2 = (state = initState, action) => {
    var newState = {...state};
    switch (action.type){
        case "CHANGE_BRAND":
            console.log("revise store throught reducer 2");
            return newState;
        case "CHANGE_MODEL":
            console.log("revise store throught reducer 2");
            return newState;
        case "SHOW_TEXT":
            return newState;
    }
    return newState;
};

export default reducer2;