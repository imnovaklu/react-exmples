import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
        };
        this.disableButton = this.disableButton.bind(this);
    }

    disableButton(){
        let {disabled} = this.state;
        this.setState({
            disabled: !disabled,
        });
        setTimeout(function() {
            this.setState({
                disabled: false,
            });
        }.bind(this), 3000);
    }

    render() {
        let {disabled} = this.state;
        let buttonValue = disabled? "Submitting...":"Submit";

        return (
            <Row>
                <Col lg={2} md={2} sm={2} xs={2}/>
                <Col lg={8} md={8} sm={8} xs={8} className="text-center">
                    <Button className="btn btn-primary" disabled={disabled} onClick={this.disableButton}>{buttonValue}</Button>
                </Col>
            </Row>
        );
    }
}

export default Layout;