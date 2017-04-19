import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Passinput from './passinput';
import Passbtn from './passbtn';
import 'bootstrap/dist/css/bootstrap.css';

class Passcomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        };
        this.changePassword = this.changePassword.bind(this);
    }

    SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/;
    DIGIT_REGEX = /[0-9]/;

    goodPasswordPrinciples = [
        {
            label: '6+ characters',
            predicate: password => password.length >= 6
        },
        {
            label: 'with at least one digit',
            predicate: password => password.match(this.DIGIT_REGEX) !== null
        },
        {
            label: 'with at least one special character',
            predicate: password => password.match(this.SPECIAL_CHARS_REGEX) != null
        }
    ];

    changePassword(ps){
        this.setState({ password: ps });
        console.log(this.state);
    }

    render(){
        let { password } = this.state;

        return (
            <Grid>
                <Row>
                    <Col lg={8} md={8}>
                        <Passinput password={password} onPasswordChange={this.changePassword} ref={input => console.log(input)}/>
                    </Col>
                    <Col lg={4} md={4}>
                        <Passbtn password={password} principle={this.goodPasswordPrinciples}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Passcomp;