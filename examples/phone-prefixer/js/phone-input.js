import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './public.css';

class PhoneInput extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const areaCode = this.props.areaCode;

        return (
            <div className="form-group">
                <label className="col-lg-3 control-label">Phone Number</label>
                <div className="col-lg-9 input-group">
                    <span className="input-group-addon">{areaCode}</span>
                    <input className="form-control"/>
                </div>
            </div>
        );
    }
}

export default PhoneInput;
