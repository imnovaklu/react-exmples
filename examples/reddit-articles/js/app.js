import React, { Component } from "react";
import ReactDOM from "react-dom";
import Store from './store';
import ListItem from './listItem';

class App extends Component{

    render (){
        const store = Store.getState();
        const item_arr = store.item.sort((x,y)=> x.vote < y.vote );

        return (
            <ul className="list-group">
                {item_arr.map(item=>
                    <ListItem vote={item.vote} key={item.index} content={item.content} index={item.index}/>
                )}
            </ul>
        )
    }
}

const renderDom = () => ReactDOM.render(<App/>, document.getElementById("root"));
renderDom();
Store.subscribe(renderDom);
