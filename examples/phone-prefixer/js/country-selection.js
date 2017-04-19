import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './public.css';

class CountrySelection extends Component {
    constructor(props){
        super(props);
        this.state = {
            defaultValue: props.selectedCountry
        };
        this.onCountryChange = this.onCountryChange.bind(this);
    }

    onCountryChange(e) {
        this.setState({defaultValue: e.target.value});
        this.props.handleCountryChange(e.target.value);
    }

    render() {
        let { defaultValue } = this.state;

        return (
            <div className="form-group">
                <label className="col-lg-3 control-label">Country</label>
                <div className="col-lg-9 input-group">
                    <select className="form-control" defaultValue={defaultValue} onChange={this.onCountryChange}>
                        <option value="china">China</option>
                        <option value="germany">Germany</option>
                        <option value="poland">Poland</option>
                        <option value="serbia">Serbia</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default CountrySelection;