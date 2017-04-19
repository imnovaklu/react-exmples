import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Passinput extends Component {
    constructor(props){
        super(props);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.focus = this.focus.bind(this);
    }

    componentDidMount() {
        this.focus();
    }

    focus(){
        this.textInput.focus();
    }

    handlePasswordChange(event){
        let { onPasswordChange } = this.props;
        onPasswordChange(event.target.value);
    }

    render(){
        let {password} = this.props;

        return (
            <div className="form-group has-success has-feedback">
                <label className="control-label" >Password {this.props.children}</label>
                <input
                    type="text"
                    id="password-input"
                    className="form-control"
                    placeholder="password"
                    onChange={this.handlePasswordChange}
                    value={password}
                    ref={ input => { this.textInput = input; } }/>
                <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            </div>
        )
    }
}

Passinput.propTypes = {
    password: React.PropTypes.string,
    onPasswordChange:  (props, propName, componentName) => {
        console.group("props validation");
        console.log(props);
        console.log(propName);
        console.log(componentName);
        console.groupEnd();
    }
};

export default Passinput;