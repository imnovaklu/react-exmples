import React, {Component} from 'react';
import Store from '../store/store';
import 'bootstrap/dist/css/bootstrap.css';

class ModelSelect extends Component{
    constructor(props){
        super(props);
        this.onSelectModel = this.onSelectModel.bind(this);
    }

    /*componentWillUpdate(){
        if(this.refs.select.selectedIndex != 0){
            this.refs.select.selectedIndex = 0;
        }
    }*/

    onSelectModel(){
        Store.dispatch({
            type: "CHANGE_MODEL",
            index: this.refs.select.selectedIndex
        });
    }

    render(){
        const {brands, selectedBrand} = Store.getState().reducer1;
        const selected = brands.find(item => item.name == selectedBrand);
        const models = selected? selected.model: [];

        return (
            <select ref="select" onChange={this.onSelectModel} className="form-control">
                <option>Model</option>
                {models.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        )
    }
}

export default ModelSelect;