import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Store from '../store/store';
import InvoiceTable from './invoiceTable';

class App extends Component{
    render(){
        return (
            <div className="container">
                <div className="well">
                    <InvoiceTable/>
                </div>
            </div>
        )
    }
}

var renderDOM = () => ReactDOM.render(<App/>, document.getElementById('root'));
renderDOM();
Store.subscribe(renderDOM);