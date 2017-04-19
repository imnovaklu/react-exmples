import React, {Component} from 'React';
import "bootstrap/dist/css/bootstrap.css";
import Store from './store';

export default class ListItem extends Component{
    constructor(props){
        super(props);
        this.onVoteUp = this.onVoteUp.bind(this);
        this.onVoteDown = this.onVoteDown.bind(this);
    }

    onVoteUp(){
        Store.dispatch({
            type: "UP_VOTE",
            index: this.props.index
        });
    };

    onVoteDown(){
        Store.dispatch({
            type: "DOWN_VOTE",
            index: this.props.index
        });
    };

    render(){
        const {vote, content, index} = this.props;
        const labelClass = vote>0?"label-success":vote<0?"label-danger":"label-warning";

        return(
            <li className="list-group-item">
                <span className={"label "+labelClass}>{vote}</span>
                {"  " + content}
                <button className="btn btn-success pull-right" onClick={this.onVoteUp}>↑</button>
                <button className="btn btn-danger pull-right" onClick={this.onVoteDown}>↓</button>
            </li>
        )
    }
}