import React, { Component } from 'react';

class FilterInput extends Component {

    constructor(props){
        super(props);
        this.onQueryChange = this.onQueryChange.bind(this);
    }

    onQueryChange(e){
        const { handleQueryChange } = this.props;
        handleQueryChange(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" className="form-control" placeholder="Search channels..." onChange={this.onQueryChange}/>
            </div>
        );
    }
}

export default FilterInput;