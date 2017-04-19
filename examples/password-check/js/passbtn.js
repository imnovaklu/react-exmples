import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Passbtn extends Component {

    principleSatisfied(principle){
        let { password } = this.props;
        return principle.predicate(password);
    }

    labelClassName(principle){
        return this.principleSatisfied(principle)?"text-success":"text-danger";
    }

    progressPercent(principle){
        let progress = 1;
        for(let p of principle){
            if(this.principleSatisfied(p)){
                progress += 33;
            }
        }
        return {width: progress+"%"};
    }

    progressColor(principle){
        let satisfiedNumber = 0;
        for(let p of principle){
            if(this.principleSatisfied(p)){
                satisfiedNumber++;
            }
        }
        switch (satisfiedNumber){
            case 0:
            case 1:
                return "danger";
            case 2:
                return "warning";
            case 3:
                return "success";
            default:
                return "danger";
        }
    }

    render(){
        let { principle } = this.props;
        let progressStyle = this.progressPercent(principle);
        let progressColor = this.progressColor(principle);

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="progress">
                        <div className={"progress-bar progress-bar-" + progressColor} style={progressStyle}></div>
                    </div>
                    <h5>A good password is:</h5>
                    <ul>
                        {principle.map(principle =>
                            <li className={this.labelClassName(principle) + " text-left"}>
                                <small>{principle.label}</small>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Passbtn;
