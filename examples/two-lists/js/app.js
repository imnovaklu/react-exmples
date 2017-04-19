import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Store from '../store/store';
import BrandSelect from './brandSelect';
import ModelSelect from './modelSelect';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
    constructor(props){
        super(props);
        this.showText = this.showText.bind(this);
    }

    showText(){
        Store.dispatch({
            type:"SHOW_TEXT"
        });
    }

    render(){
        const {selectedBrand, selectedModel, showText} = Store.getState();

        return (
            <div className="container has-success">
                <div className="row">
                    <div className="col-lg-4">
                        <BrandSelect/>
                    </div>
                    <div className="col-lg-4">
                        <ModelSelect/>
                    </div>
                    <div className="col-lg-4">
                        <button className="btn btn-info" onClick={this.showText}>Ride</button>
                    </div>
                </div>
                <div className="row">
                    {showText? selectedBrand + " " + selectedModel: null}
                </div>
            </div>
        )
    }
}

const renderDOM = () => {
    ReactDOM.render(<App/>, document.getElementById('root'));
};
renderDOM();
Store.subscribe(renderDOM);
