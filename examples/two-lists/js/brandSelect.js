import React, {Component} from 'react';
import Store from '../store/store';
import 'bootstrap/dist/css/bootstrap.css';

class BrandSelect extends Component{
    constructor(props){
        super(props);
        this.onSelectBrand = this.onSelectBrand.bind(this);
    }

    onSelectBrand(){
        Store.dispatch({
            type: "CHANGE_BRAND",
            index: this.refs.select.selectedIndex
        });
    }

    render(){
        const {brands} = Store.getState().reducer1;

        return (
            <select className="form-control" ref="select" onChange={this.onSelectBrand}>
                <option>Brand</option>
                {brands.map((item, index) => <option key={index}>{item.name}</option>)}
            </select>
        )
    }
}

export default BrandSelect;