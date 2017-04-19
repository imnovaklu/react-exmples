import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/fancy-input.css';

class FancyInput extends Component {

    constructor(props){
        super(props);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.state = {
            fancyspan: "fancy-span-original"
        };
    }

    handleInputFocus(e){
        let value = e.target.value;
        if(value == ""){
            this.setState({
                fancyspan: "fancy-span-original"
            });
        }else{
            this.setState({
                fancyspan: "fancy-span-active"
            });
        }
    }

    render() {
        let { fancyspan } = this.state;

        return (
            <div id="input-container">
                <input type="text" className="form-control" onChange={this.handleInputFocus}/>
                <span className={fancyspan}>First Name</span>
            </div>
        );
    }
}

export default FancyInput;