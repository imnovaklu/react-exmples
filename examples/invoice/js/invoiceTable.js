import React, {Component} from 'react';
import Store from '../store/store';
import 'font-awesome/css/font-awesome.min.css';

class InvoiceTable extends Component{
    constructor(props){
        super(props);
    }

    onAddItem(){
        Store.dispatch({
            type:"ADD_ITEM"
        });
    }

    onDeleteItem(e){
        Store.dispatch({
            type:"DELETE_ITEM",
            index: e.target.getAttribute("data-index")
        });
    }

    onDataUpdate(e){
        let obj = {};
        obj[e.target.getAttribute("name")] = e.target.value;
        Store.dispatch({
            type:"DATA_UPDATE",
            index:e.target.getAttribute("data-index"),
            content:obj
        });
    }

    render(){
        const {data} = Store.getState();
        const v_data = data.filter(item=>item.visible);
        var total = 0;
        v_data.map((i)=>{total += i.amount*i.price});
        const tdStyle = {minWidth: "100px"};

        return (
            <table className="table table-bordered table-hover">
                <thead className="thead-inverse">
                <tr>
                    <th>Nr</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((elem, index)=>{
                    if(elem.visible){
                        return (
                            <tr key={index}>
                                <td>{index + 1 + "."}</td>
                                <td><input type="text" className="form-control"/></td>
                                <td>
                                    <div className="input-group">
                                        <span className="input-group-addon">$</span>
                                        <input type="text" className="form-control" name="price" data-index={index}
                                               defaultValue={elem.price == 0 ? "" : elem.price}
                                               onChange={this.onDataUpdate}/>
                                    </div>
                                </td>
                                <td>
                                    <input type="text" className="form-control" name="amount" data-index={index}
                                           defaultValue={elem.amount == 0 ? "" : elem.amount} onChange={this.onDataUpdate}/>
                                </td>
                                <td style={tdStyle}>{"$" + elem.price * elem.amount}</td>
                                <td>
                                    <button data-index={index} className="btn btn-danger" onClick={this.onDeleteItem}>×
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                })}
                <tr>
                    <td colSpan="4"></td>
                    <td style={tdStyle}>{"$" + total}</td>
                    <td><button className="btn btn-success" onClick={this.onAddItem}>+</button></td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default InvoiceTable;