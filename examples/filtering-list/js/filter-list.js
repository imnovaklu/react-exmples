import React, { Component } from 'react';
import '../css/filter-list.css';

class FilterList extends Component {
    constructor(props){
        super(props);
        this.setLength = this.setLength.bind(this);
    }

    setLength(){
        let { query } = this.props;
        let arr = [
            "#reactjs",
            "#general",
            "#random",
            "#flux",
            "#relay",
            "#immutablejs",
            "#flow",
            "#webpack",
            "#babel",
            "#handlebars"
        ];
        if(query == "")
            return arr;

        arr = arr.filter(item => item.indexOf(query) == 1);
        return arr;
    }

    render() {
        let { handleLengthChange, length } = this.props;
        let arr = this.setLength();
        if (length !== arr.length)
            handleLengthChange(arr.length);

        return (
            <div className="list-group">
                {arr.map(item =>
                    <a className="list-group-item" href={item}>
                        <span>{item}</span>
                    </a>
                )}
            </div>
        );
    }
}

export default FilterList;
