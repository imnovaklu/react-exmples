import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import CountrySelection from './country-selection';
import PhoneInput from './phone-input';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            areaCode: "+86"
        };
        this.handleCountryChange = this.handleCountryChange.bind(this);
    }

    handleCountryChange(val){
        const codes = {
            "china": "+86",
            "germany": "+49",
            "poland": "+48",
            "serbia": "+381"
        };
        this.setState({areaCode: codes[val]});
    }

    render() {
        const formStyle = {
            width: "600px",
            margin: "50px auto"
        };
        let { areaCode } = this.state;

        return (
            <div className="text-center">
                <Form style={formStyle}>
                    <CountrySelection handleCountryChange={this.handleCountryChange} selectedCountry="china"/>
                    <PhoneInput areaCode={areaCode}/>
                </Form>
            </div>
        );
    }
}

export default Layout;