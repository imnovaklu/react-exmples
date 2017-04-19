import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "enable",
            enable: true
        };
    }

    handleClick = () => {
        this.setState({
            inputText: this.state.enable?"disable":"enable",
            enable: !this.state.enable
        });
    };

    render(){
        const mark = "????";
        return (
            <div>
                <div className="container text-center">
                    <div className="form-group">
                        <span className="badge" style={{background:"red"}}>{mark}</span>
                        <div className="input-group">
                            <input className="form-control" type="text" disabled={this.state.enable}/>
                            <span className="input-group-btn">
                                <input className="btn btn-danger" onClick={this.handleClick} value={this.state.inputText + "the textbox"}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;