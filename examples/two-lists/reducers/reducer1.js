const initState = {
    brands: [{
        name:"Opel",
        model:["Agila","Astra","Corsa","Vectra"]
    },{
        name:"Skoda",
        model:["Fabia","Octavia","Superb","Yeti"]
    },{
        name:"Toyota",
        model:["Auris","Avensis","Corolla","Prius"]
    }],
    selectedBrand:"",
    selectedModel:"",
    showText: false
};

const reducer1 = (state = initState, action) => {
    var newState = {...state};
    switch (action.type){
        case "CHANGE_BRAND":
            console.log("revise store throught reducer 1");
            newState.selectedBrand = newState.brands[action.index-1].name;
            return newState;
        case "CHANGE_MODEL":
            console.log("revise store throught reducer 1");
            newState.selectedModel = newState.brands.find(item=>item.name==newState.selectedBrand).model[action.index - 1];
            return newState;
        case "SHOW_TEXT":
            newState.showText = true;
            return newState;
    }
    return newState;
};

export default reducer1;